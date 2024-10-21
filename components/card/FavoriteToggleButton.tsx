import { fetchFavoriteId } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import FavoriteToggleForm from './FavoriteToggleForm';

export default async function FavoriteToggleBtn({
  propertyId,
}: {
  propertyId: string;
}): Promise<JSX.Element> {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ propertyId });

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
}
