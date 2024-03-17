import { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  const [isUsersListVisible, setIsUsersListVisible] = useState(false);

  return (
    <>
      {isUsersListVisible && <UsersList />}
      <button
        className="border-2 border-black p-2 bg-red-400 hover:bg-red-500 rounded-lg"
        onClick={() => setIsUsersListVisible(!isUsersListVisible)}
      >
        Toggle UsersList Visibility
      </button>
    </>
  );
}

export default App;
