#!/bin/bash

# Build static website for deployment at a configurable subdirectory
# Sets environment variables for static build mode

DEPLOY_BASE_PATH="${VITE_BASE_PATH:-/newwebsitetest/}"

if [[ "$DEPLOY_BASE_PATH" != /* ]]; then
  DEPLOY_BASE_PATH="/$DEPLOY_BASE_PATH"
fi

if [[ "$DEPLOY_BASE_PATH" != */ ]]; then
  DEPLOY_BASE_PATH="$DEPLOY_BASE_PATH/"
fi

DEPLOY_FOLDER="${DEPLOY_BASE_PATH#/}"
DEPLOY_FOLDER="${DEPLOY_FOLDER%/}"

echo "🚀 Building static website for $DEPLOY_BASE_PATH deployment..."
echo ""

# Set environment variables for static build
export VITE_STATIC_BUILD=true
export VITE_BASE_PATH="$DEPLOY_BASE_PATH"
export NODE_ENV=production

# Run export script to get latest data
echo "📦 Exporting latest content data..."
npx tsx scripts/export-static-data.ts
if [ $? -ne 0 ]; then
  if [ -f "client/public/data/services.json" ]; then
    echo "⚠️  Data export failed; continuing with existing files in client/public/data."
  else
    echo "❌ Data export failed and no existing static data files were found!"
    exit 1
  fi
fi
echo ""

# Convert image paths to direct GCS URLs
echo "🖼️  Converting image paths to GCS URLs..."
npx tsx scripts/prepare-static-images.ts
if [ $? -ne 0 ]; then
  echo "❌ Image path conversion failed!"
  exit 1
fi
echo ""

# Build the frontend
echo "🏗️  Building frontend with Vite..."
npx vite build --base="$DEPLOY_BASE_PATH"
if [ $? -ne 0 ]; then
  echo "❌ Frontend build failed!"
  exit 1
fi
echo ""

# Create deployment package
echo "📦 Creating deployment package..."
rm -rf deploy-package
mkdir -p "deploy-package/$DEPLOY_FOLDER"

# Copy built files from dist/public (where Vite outputs according to config)
echo "  Copying built files from dist/public..."
cp -r dist/public/* "deploy-package/$DEPLOY_FOLDER/"

# Copy data files to the build
echo "  Copying data files..."
mkdir -p "deploy-package/$DEPLOY_FOLDER/data"
cp -r client/public/data/* "deploy-package/$DEPLOY_FOLDER/data/"

# Create .htaccess for proper routing
cat > "deploy-package/$DEPLOY_FOLDER/.htaccess" << EOF
# Enable mod_rewrite
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase $DEPLOY_BASE_PATH
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html for SPA routing
  RewriteRule ^ index.html [L]
</IfModule>

# Set caching headers
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # Fonts
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
  
  # Default
  ExpiresDefault "access plus 2 days"
</IfModule>

# Compress text files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
EOF

# Create README
cat > deploy-package/README.txt << EOF
CC&C Solutions Website - Static Build for Testing
==================================================

This package contains the static website build for testing at:
www.ccandcsolutions.com$DEPLOY_BASE_PATH

DEPLOYMENT INSTRUCTIONS:
========================

1. Connect to your Hostinger hosting via FTP or File Manager

2. Navigate to the public_html directory (or your website root)

3. Upload the generated "$DEPLOY_FOLDER" folder path to public_html/
   
   Your structure should look like:
   public_html/
  ├── $DEPLOY_FOLDER/
   │   ├── index.html
   │   ├── assets/
   │   ├── data/
   │   └── .htaccess

4. The website should now be accessible at:
  https://www.ccandcsolutions.com$DEPLOY_BASE_PATH

5. Test all pages and features:
   - Navigation works
   - Images load correctly
   - Contact form submits successfully
   - All links work properly

NOTES:
======

- The .htaccess file ensures proper routing for the single-page application
- Static data is loaded from the /data directory
- Images are served from Google Cloud Storage
- Contact form uses Formspree service (configured separately)

KNOWN LIMITATIONS (Static Version):
====================================

- No CMS/Admin panel (requires backend server)
- No AI chatbot (requires OpenAI API access)
- Content updates require rebuilding the static site

For questions or support, contact: anish@ccandcsolutions.com
EOF

# Create compressed archive
echo "🗜️  Creating compressed archive..."
cd deploy-package
tar -czf ../ccandcsolutions-static-website.tar.gz "$DEPLOY_FOLDER" README.txt
cd ..

echo ""
echo "✅ Static build complete!"
echo ""
echo "📁 Output location:"
echo "   - Folder: ./deploy-package/$DEPLOY_FOLDER/"
echo "   - Archive: ./ccandcsolutions-static-website.tar.gz"
echo ""
echo "📊 Package contents:"
du -sh "deploy-package/$DEPLOY_FOLDER" 2>/dev/null || echo "   (size calculation not available)"
echo ""
echo "🚀 Next steps:"
echo "   1. Download ccandcsolutions-static-website.tar.gz"
echo "   2. Extract the archive on your computer"
echo "   3. Upload the '$DEPLOY_FOLDER' folder path to Hostinger public_html/"
echo "   4. Test at www.ccandcsolutions.com$DEPLOY_BASE_PATH"
echo ""
