- CreateContext()
- useContext - to use the Context that got Created

- Provder:
    - createdContext.Provider value{} while creating the 
    - ({children}) inisde the provider, to provide the provider to the chldren context
    - 



- Project with Todo, Local Storage, Edit delete and all that feature


---- 
- in this peroject we will look at a different way to implement COntextAPi

CHeckout practiseProj_2 for the Provider way of implemeNTING the Context API.\

- HEre, we will implement the Structure through createContext.



-----

Steps and important Configs:
- createContext with Rewuired Parameters for Working with that context
- Create a provider for it

- Setup the Provider with the Enclosed Child Components <TodoProvider><TodoProvider/>
- Setup the Value (the paramters for the createContext: Basically your Data you want to persist as well as your Functions to manipulate the Persistant Data)


- Additional: Make UseEffect to Load and Register the Persistant data in local Storage



