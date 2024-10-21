import { fetchProfileImage } from '@/utils/actions';
import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';

export default async function UserIcon(): Promise<JSX.Element> {
  const profileImage: string | null | undefined = await fetchProfileImage();
  if (profileImage)
    return (
      <Image
        width={300}
        height={300}
        src={profileImage}
        className="w-6 h-6 bg-primary rounded-full object-cover"
        alt={''}
      />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
