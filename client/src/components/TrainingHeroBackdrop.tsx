import type { ReactNode } from "react";

type TrainingHeroBackdropProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  backgroundClassName?: string;
  accentClassName?: string;
};

export default function TrainingHeroBackdrop({
  children,
  className = "pt-32 pb-20",
  contentClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  backgroundClassName = "bg-[#071421]",
  accentClassName = "bg-primary/60",
}: TrainingHeroBackdropProps) {
  return (
    <section className={`relative overflow-hidden text-white ${backgroundClassName} ${className}`}>
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <div className={`absolute inset-0 ${backgroundClassName}`}></div>
        <div className="absolute left-1/2 top-8 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10"></div>
        <div className="absolute right-[14%] bottom-16 h-36 w-36 rounded-full border border-white/15"></div>
        <div className={`absolute left-[18%] bottom-20 h-px w-64 ${accentClassName}`}></div>
        <div className="absolute right-[20%] top-32 h-px w-56 rotate-45 bg-white/30"></div>
      </div>
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </section>
  );
}
