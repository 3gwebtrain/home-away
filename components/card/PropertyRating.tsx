import { fetchPropertyRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

export default async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}): Promise<JSX.Element> {
  const { rating, count } = await fetchPropertyRating(propertyId);
  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const countText = count > 1 ? 'reviews' : 'review';
  const countValue = `(${count}) ${inPage ? countText : ''}`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
