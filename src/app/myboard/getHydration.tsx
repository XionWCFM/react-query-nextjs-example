'use client';
import { useGetUsersQuery } from '@/utils/getUsers';
import Image from 'next/image';

interface GetHydrationProps {}

const GetHydration = ({}: GetHydrationProps) => {
  const { data, isError, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Loading</div>;
  if (error || !data) return <div>Error</div>;
  return (
    <div>
      {data.map((user) => (
        <div
          key={user.id}
          style={{ border: '1px solid #ccc', textAlign: 'center' }}
        >
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            width={180}
            height={180}
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GetHydration;
