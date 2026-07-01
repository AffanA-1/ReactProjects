'Steps:
- createBrowserRouter at the Routing position
- Add the ROutes inside the createBrowserRouter with Path and the Component To render
- Make sure youre Using nesting for thosr COmponents that are using Outlet inside themselves

- Keeping App as the parent rounter (there can only be one parent router), we include the 'Outlet' as the postion that will replace all the components

-The initail setup is done
    - Now for the components that render, we can use the react-router-dom functions and coponents like: 
        - Link, 
        - NavLink,
        - useParamSearch,
        - useParam,
        - useNavigate, 
        - Loader - Loader Function - useLoaderData

General info:
// We cant just use Link and NavLinks without the Router being set in place. We need to use them within encapsulate Router Provider

