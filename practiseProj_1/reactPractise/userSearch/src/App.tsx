import { useEffect, useState } from "react";
import { gql, type TypedDocumentNode } from "@apollo/client";

import "./App.css";
import { useQuery } from "@apollo/client/react";
import UserCard from "./components/Listusers/UserCard";
import UserList from "./components/Listusers/UserList";
import NewUser from "./components/NewUserForm/NewUser";
import AddUser from "./components/NewUserForm/AddUser";
import UserWrapper from "./components/Listusers/UserWrapper";

export interface IUser {
  id: number;
  name: string;
  phone: number;
  Website: string;
}
// class User implements User {}

function App() {
  


   return (
    <>
    <AddUser />
    <UserWrapper />
    </>
   )
}


export default App;
