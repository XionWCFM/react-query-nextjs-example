import { User } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await res.json()) as User[];
  return users;
}

export const useGetUsersQuery = () => {
  const userList = useQuery({
    queryKey: ['myboard'],
    queryFn: () => getUsers(),
  });
  return userList;
};
