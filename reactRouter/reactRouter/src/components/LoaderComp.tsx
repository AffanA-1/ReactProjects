import { useEffect, useState } from "react"

export type fetchedData = {
    followers: number
    avatar_url: string
}

export const LoaderCompt: React.FC = ()=> {
    const [data, setData] = useState<fetchedData>()

    useEffect(()=>{
        fetch('https://api.github.com/users/affanaslam24')
        .then(Response => Response.json())
        .then(data=>{
            console.log(data.followers);
            setData(data)
        })
    }, [])


    console.log(data?.followers);



    if (!data) {
        return <div className="text-center m-4 text-white">Loading...</div>
    }

    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                {/* Safe access using optional chaining */}
                Github followers: {data?.followers} 
                 <img src={data?.avatar_url} alt="Git Picture" width={300} />
            </div>
           
        </>
    )
}