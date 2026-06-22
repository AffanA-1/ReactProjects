import { createContext, useEffect, useState } from "react";
import { gql, type TypedDocumentNode } from "@apollo/client";

import "../../App.css";
import { useMutation, useQuery } from "@apollo/client/react";
import UserCard from "./UserCard";
import React from "react";

export interface IUser {
  id: number;
  name: string;
  phone: number;
  Website: string;
}

type GetUsersQueryBody = {
  users: {
    status: string;
    users: IUser[];
    message: string;
  };
};
type GetUsersQueryVariable = Record<string, never>;

type DeleteUserResBody = {
  deleteUser: {
    status: string;
  };
};

type DeleteUserVariableBody = {
  id: number;
};

// class User implements User {}
const query: TypedDocumentNode<GetUsersQueryBody, GetUsersQueryVariable> = gql`
  query Users {
    users {
      status
      users {
        id
        name
        phone
        Website
      }
      message
    }
  }
`;

const deletionQuery: TypedDocumentNode<
  DeleteUserResBody,
  DeleteUserVariableBody
> = gql`
  mutation Mutation($id: ID!) {
    deleteUser(id: $id) {
      status
    }
  }
`;

// const UserContext = createContext();


interface UserListProps {
    result: IUser[]
}

const UserList: React.FC<UserListProps> = ({ result } ) => {
    // shifting this to the main Wrapper
//   const { loading, error, data } = useQuery(query);

  const [
    deleteUser,
    { loading: mutationLoading, data: mutationData },
  ] = useMutation(deletionQuery);

  const [users, setUsers] = useState<IUser[]>([]);
  const [initialized, setInitialized] = useState(false);
  const [notificationShown, setNotificationShown] = useState(false);
  const [currentUser, setCurrentUser] = useState('')



  // if result is empty, then render all data

  // if result has something, then show do an api call



  console.log(result);
  //shifitng this to the main wrappper
  useEffect(() => {
    // Check if data is available and contains the user list
    // if (!initialized && result) {
      // setTimeout(()=>{setUsers(data.users.users);}, 10)
      setUsers(result);
    //   setInitialized(true);
    // }
  }, [result]);

  //this is passed as a closure to the child component
  function handlingOnDeleteFunction(id: number) {


    deleteUser({variables: {id: id}})


    if(!mutationLoading){
    setUsers((prevUsers) => {
         
      return prevUsers.filter((user) => user.id !== id);
    });
    setCurrentUser(users.find((user)=> user.id === id)!.name)
   
    setNotificationShown(true);
    setTimeout(() => {
      setNotificationShown(false);
    }, 5000); 
}
  }

//   if (loading) {
//     return <p>Loading...</p>;
//   } else if (error) {
//     return <p>Error : {error.message}</p>;
//   } else {
    return (
      <div className="user-list-container">
         {notificationShown && <span>{mutationData?.deleteUser.status}!! User - {currentUser} was removed successfully</span>}
        <h2>User Search Practice List</h2>
        {users.length === 0 && <p>No users found.</p>}

        <div className="card-grid-wrapper">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handlingOnDeleteFunction}
            />
          ))}
        </div>
      </div>
    );
};

export default UserList;
