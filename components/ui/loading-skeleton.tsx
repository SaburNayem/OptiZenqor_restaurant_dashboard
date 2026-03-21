export function LoadingSkeleton({ className = "h-24 w-full" }: { className?: string }) {
  return <div className={`animate-pulse rounded-[24px] bg-stone-200/70 ${className}`} />;
}
