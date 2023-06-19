const dataType = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
};

type UserType = typeof dataType;

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 100,
    },
  });
  return await res.json();
}

export default async function Page() {
  const datas = await getData();
  return <div>{datas.map((data: UserType) => data.username)}</div>;
}
