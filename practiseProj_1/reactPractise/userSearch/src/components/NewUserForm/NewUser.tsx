import  { useRef, type FormEvent } from "react";

interface NewUserProps {
    onAdd: (name: string, phone: number, Website: string) => void
}

export default function NewUser({ onAdd }: NewUserProps) {
    const nameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const websiteRef = useRef<HTMLInputElement>(null)

    // console.log(onAdd);


    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        // we can similarly use states to manage the state over here
        // but we will use refs.
        // refs are something that takes the reference of the html, and manages the rendering of the data

        //deriving the forms elments value
        const enteredName = nameRef.current!.value
        const eneteredPhone = +phoneRef.current!.value

        const enteredWebsite = websiteRef.current!.value
        console.log(enteredWebsite);


        // now we will pass this gathered value and update the state of the goalState
    
        onAdd(enteredName, eneteredPhone, enteredWebsite)
    }


    //the below will call the function and delegate the 'event' generated on the submission of the form
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="name">User Name</label>
            {/* adding the useRefs created above over here */}
            {/* so now whatever we write over in these typed, will be propagates to the above consts */}
            <input id="name"  type="text" ref = {nameRef}/>
        </p>
        <p>
            <label htmlFor="phone">Phone Number</label>
            {/* adding the useRefs created above over here */}
            <input id="phone"  type="number" ref = {phoneRef}/>
        </p>
        <p>
            <label htmlFor="website">your Website</label>
            {/* adding the useRefs created above over here */}
            <input id="website"  type="email" ref = {websiteRef}/>
        </p>
        <p>
            <button>Add User</button>
        </p>
    </form>
}