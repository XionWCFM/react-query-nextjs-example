import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { User } from '@/types/types';
import { getUsers } from '@/utils/getUsers';
import GetHydration from './getHydration';
import { dehydrate } from '@tanstack/query-core';

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['myboard'], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <GetHydration />
    </Hydrate>
  );
}
