'use client';

import { Skeleton } from '@/components/ui/skeleton';
function loading(): JSX.Element {
  return <Skeleton className="h-[300px] md:h-[500px] w-full rounded" />;
}

export default loading;
