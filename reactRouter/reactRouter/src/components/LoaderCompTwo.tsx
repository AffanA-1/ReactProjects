import React from "react"
import { useLoaderData } from "react-router-dom"
import type { fetchedData } from "./LoaderComp"

export const LoaderCompTwo: React.FC = ()=> {

    const data = useLoaderData<fetchedData>()





    return (<>
          <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                {/* Safe access using optional chaining */}
                Github followers: {data.followers} 
                 <img src={data.avatar_url} alt="Git Picture" width={300} />
            </div>

    </>)
}