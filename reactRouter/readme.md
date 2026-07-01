Third Party Library:
- react-router-dom


Features:
- Link component, use this instead of A tag
    SInce A tag refreshes the page, and we want to make it more oiptimised than that:
        - When you use a standard <a href="/about">, the browser does what it has always done: it clears the current state, destroys the entire DOM, requests the new HTML page from the server, and reloads everything (scripts, styles, assets).

        - The <Link to="/about"> component intercepts this default browser behavior. Instead of fetching a whole new page, it simply updates the URL in the browser address bar and tells React Router to swap out the old component for the new one.

        - Imagine a user is filling out a multi-step form or has a sidebar toggled open. If they click a standard anchor tag to check another page and then hit "back," all of that temporary application state is wiped out.
        Because <Link> keeps the user inside the same continuous React session, your global state (like Redux, Conte xt, or component states) remains perfectly intact.


- NavLink Component - inside the ClassName you can use isActive to dynamically change the Active Status of the Router

- createBrowserRouter: Path, element to render, allowed children for the Element
    - This is where we add the multiple child Elements to route to
- Reactprovider route={router}

- OUtlet - use inside the Main element in the createBrowserROuter


- Query Parameters: ?key=value&key2=value2
- URL paramters: /:value = useParams()


- loader: Allows you to load specific data - calls a function for this, you can write any logic within this function. HTe function execution completes first before the final loading of the Route

- Programmatic routing: useNavigate() and then navigate(/endpoint)