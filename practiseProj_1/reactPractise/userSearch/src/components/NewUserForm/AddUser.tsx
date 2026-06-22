import { gql, type TypedDocumentNode } from "@apollo/client";
import type { IUser } from "../Listusers/UserList";
import NewUser from "./NewUser";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import './AddUser.css'

type AddUserResBody = {
    addUser: {
        id: number
    }
}

type AddUserVariableBody = {
  user: Omit<IUser, 'id'>
};

const AddUserMutation: TypedDocumentNode<
  AddUserResBody,
  AddUserVariableBody
> = gql`
  mutation AddUser($user: UserInputData) {
  addUser(user: $user) {
    id
  }
}
`;




const AddUser: React.FC = () => {

    //  const [notificationShown, setNotificationShown] = useState(false);
     const [notificationShown, setNotificationShown] = useState<{ message: string; isError: boolean } | null>(null)
const [
    addUserMutation,  ] = useMutation(AddUserMutation);


     async function handleAddUser(name: string, phone: number, Website: string){
        setNotificationShown(null);
        try {
        const result = await addUserMutation({
            variables: {
                user: {
                    name,
                    phone,
                    Website
                }
            }
        })

         if (result.error || !result.data) {
                setNotificationShown({ 
                    message: result.error?.message || "An unknown error occurred.", 
                    isError: true 
                });
            } else {
                setNotificationShown({
                    message: `${result.data.addUser.id}!! User was added successfully`,
                    isError: false 
                });
            }
   
}
 catch(error) {
    setNotificationShown({ 
                message: (error as Error).message, 
                isError: true 
            });
    }

    setTimeout(() => {
            setNotificationShown(null);
        }, 5000);

}


    return <>
    {notificationShown && (
                <span style={{ color: notificationShown.isError ? 'red' : 'green' }}>
                    {notificationShown.message}
                </span>
            )}
    <div className="add-user-form">

    <NewUser onAdd={handleAddUser}/>
    </div>
     
    </>
}

export default AddUser




