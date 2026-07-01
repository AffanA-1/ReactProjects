import React from "react";
import { useParams } from "react-router-dom";

export function User():React.ReactNode{

    // To fetch the Param vcalues throufh the RO9tuer
    const {userId} = useParams()



    return (
        <>
        <div>
            <h1>User: {userId}</h1>
        </div>
        </>
    )

}