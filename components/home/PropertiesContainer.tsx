import { fetchProperties } from '@/utils/actions';
import type { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';

export default async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}): Promise<JSX.Element> {
  const properties: PropertyCardProps[] = await fetchProperties({ category, search });
  if (properties.length === 0)
    return (
      <EmptyList
        heading="No results"
        message="Try changing or removing some of your filter"
        btnText="Clear Filters"
      />
    );

  return <PropertiesList properties={properties} />;
}
