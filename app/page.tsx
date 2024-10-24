import LoadingCards from '@/components/card/LoadingCards';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';
import { Suspense } from 'react';

export default function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}): JSX.Element {
  console.log('category', searchParams.category, searchParams.search);
  return (
    <section>
      <CategoriesList category={searchParams.category} search={searchParams.search} />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>
    </section>
  );
}
