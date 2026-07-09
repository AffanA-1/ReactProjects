- APi integration:
Use cors on the backend - to allow the frontend to connect to backend. (understand whats cors and its issues)
Whiteslist your Backend from frontend
USe fetch/axios for connection with the backend api. (both use promise concept)
:TYOu might need to setup client's and such if youre using a backend with an idp or user management
: when does API token and credentials flow comes into picture?




---

###Questions
*What is cors? - Cross Origin Resource Sharing
- Its a built in security feature on the Browser
- It says, any website hosted on one 'Origin' (domain A) cant randomly access domain B, unless Domain B allows it explicitly.
- ORigin: Protocol (http vs https), Domain, Port

In the backend you can setup Cors, and Setup Allowed Origing: URls that can connect to it.


