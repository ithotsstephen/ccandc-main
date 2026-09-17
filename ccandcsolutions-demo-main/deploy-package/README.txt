CC&C Solutions Website - Static Build for Testing
==================================================

This package contains the static website build for testing at:
www.ccandcsolutions.com/demo/main/

DEPLOYMENT INSTRUCTIONS:
========================

1. Connect to your Hostinger hosting via FTP or File Manager

2. Navigate to the public_html directory (or your website root)

3. Upload the generated "demo/main" folder path to public_html/
   
   Your structure should look like:
   public_html/
  ├── demo/main/
   │   ├── index.html
   │   ├── assets/
   │   ├── data/
   │   └── .htaccess

4. The website should now be accessible at:
  https://www.ccandcsolutions.com/demo/main/

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
