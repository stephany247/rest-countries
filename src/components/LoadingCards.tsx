import { Skeleton } from "./ui/skeleton";

function LoadingCards({ className }: { className: string }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 lg:grid-cols-4 mt-8 md:mt-12 px-6 md:px-0 ${className}`}
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-[400px] w-80 rounded-md">
        <Skeleton className="h-4 mt-2 w-3/4" />
        <Skeleton className="h-4 mt-2 w-1/2" />
      </Skeleton>
    </div>
  );
}

export default LoadingCards;
