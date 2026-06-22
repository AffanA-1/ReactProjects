import React, { useState, useRef, useEffect, type ChangeEvent } from 'react';
import UserList, { type IUser } from './UserList';
import { useDebounce } from './DebounceCustomHook';
import { useLazyQuery } from '@apollo/client/react';
import { gql, type TypedDocumentNode } from '@apollo/client';


type GetUsersQueryBody = {
  users: {
    status: string;
    users: IUser[];
    message: string;
  };
};
type GetUsersQueryVariable = Record<string, never>;

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

type GetFilteredUserResBody = {
    filteredUsers: {
        status: string;
    users: IUser[];
    message: string;
    }
}

type GetFilteredUsersQueryVariable = {
    filteredName: string
};

const FILTERED_USERS: TypedDocumentNode<GetFilteredUserResBody, GetFilteredUsersQueryVariable> = gql`
  query Query($filteredName: String) {
  filteredUsers(filteredName: $filteredName) {
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



// **Generic Component Type (Functional Component)**
// We'll define the props later in the generic component section
// **Event Handling**
const UserWrapper: React.FC = () => {

    const [getAllUsers, { data: initialData, loading: initialLoading }] = useLazyQuery(query);
    const [getSpecificUsers,{ loading: filteredLoading }] = useLazyQuery(FILTERED_USERS)

  // **State Hook**
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<IUser[]>([]);

  const [loading, setLoading] = useState(false);
//   const [method, setMethod] = useState('debounce'); // 'debounce' or 'throttle'

  // **Ref Hook** - Using a ref for a DOM element (input)
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the component loads (optional, but good practice)
  useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        
        // Load initial data immediately (Optional: you could rely solely on the search effect)
        getAllUsers(); 
        // We handle the result of this initial call in the next effect.
    }, [getAllUsers]);

  // Handler for input change event
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    // **Event Handling**
    setSearchTerm(event.target.value);
  };



  // We'll use the debounced/throttled hook values here...
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
//   const throttledSearchTerm = useThrottle(searchTerm, 500);

//   // The actual search term used based on the current method
//   const effectiveSearchTerm = method === 'debounce' ? debouncedSearchTerm : throttledSearchTerm;


// useEffect(() => {
//         if (initialData?.users?.users) {
//             setResults(initialData.users.users);
//         }
//     }, [initialData]);

  // **Effect Hook** - Triggers the API call when the effective search term changes
  useEffect(() => {

    const fetchUserData = async () => {
        setLoading(true)

        if (debouncedSearchTerm.trim() === '') {
        const {data: defaultData} = await getAllUsers()
        if(defaultData){
                setResults(defaultData.users.users!);
                 setLoading(false)
        }
      
      return;
    }else {
        const {data: filteredResults} = await getSpecificUsers({
            variables: { filteredName: debouncedSearchTerm}
        });

        if(filteredResults){
            setResults(filteredResults.filteredUsers.users)
             setLoading(false)
        }
    }
   

    }

    fetchUserData();
    



    // setLoading(true);

    // Assume you have a GraphQL/Prisma function `fetchUsers(term)`
    // This is the ideal place for your backend CRUD call.

  }, [debouncedSearchTerm, getAllUsers, getSpecificUsers]); // Dependency array: only re-run when effectiveSearchTerm changes

  return (
    <div className="user-search-container">
      <input
        // **Refs Hook** - Attaching the ref to the DOM element
        ref={inputRef}
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        // **Event Handling** - onChange event
        onChange={handleSearchChange}
      />

      {/* {(loading) && <p>Loading...</p>} */}

      {/* **Props & Component Type** - Rendering the Generic component */}
      {/* sp based on this searchTerm which is used to search the results in the list plcase */}
      <UserList result={results} />
    </div>
  );
};

export default UserWrapper;