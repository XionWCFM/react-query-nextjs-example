async function getUser(userid: unknown) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`,
  );
  return await res.json();
}

export default async function Page({ params }: any) {
  const userid = params.id;
  const user = await getUser(userid);
  return <div>{user.email}</div>;
}
