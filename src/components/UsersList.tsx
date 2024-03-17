import useUsers from "../custom-hocks/useUsers";

interface IUser {
  id: number;
  name: string;
}

const UsersList = () => {
  const [users] = useUsers<IUser[]>([]);

  return (
    <>
      {(users as IUser[])?.map((user: IUser) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </>
  );
};

export default UsersList;
