import axios from "axios";
import { useEffect, useState } from "react";

function useUsers<T>(initial: any) {
  const [users, setUsers] = useState<T>(initial);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  return [users, setUsers];
}

export default useUsers;
