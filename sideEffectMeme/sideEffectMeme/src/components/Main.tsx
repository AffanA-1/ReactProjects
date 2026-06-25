import { useEffect, useState } from "react"

export default function  Main(){

     const [meme, setMeme] = useState({
        topText: "One not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    // This is an issue, because on each button invocation the Whole Comopnent rerenders, adn then this gets set back to empty Array!!
    // This is just like how not using state will be problematic

    // This was causing an issue on rerendeinrng.
    // const memesList = []

    const [memesList, setMemesList] = useState([])

    // Use useEffect, for the first render of the app to fetch a set of memes
    useEffect(() => {
        const fetchMeme = async() => {
            const memes = await fetch('https://api.imgflip.com/get_memes')
            const memesJson = await memes.json()
            console.log(memesJson.data.memes);
            // memesList = memesJson.data.memes
            // memesJson.data.memes.forEach(element => {
            //     memesList.push(element)
            // });

            setMemesList(memesJson.data.memes)
            // console.log('mememe '  + memesList[0]);
            // memesList
        }
        fetchMeme()


    }, [])

    function handleChangeImage(){

        try {
            const randomNumber = Math.floor(Math.random() * memesList.length);
            console.log(memesList[0]);
            const randomImageSelection = memesList[randomNumber]
            if (!randomImageSelection) {
            console.error(`No meme found at index ${randomNumber}`);
            return;
        }

            // Guard Clause 3: Does the object have a URL?
            if (!randomImageSelection.url) {
                console.error("Meme object is missing 'url' property:", randomImageSelection);
                return;
            }
            setMeme(prev => {
                return {
                    ...prev,
                    imageUrl: randomImageSelection.url
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }


    function handleOnChange(event){
        console.log(event.currentTarget.id);
        const {value, id} = event.currentTarget
        setMeme(prev => {
            if(id === 'topInput'){
                return {
                ...prev,
                topText: value
            }
            } else {
                return {
                    ...prev,
                    bottomText: value
                }
            }
            
        })
    }


    return (
        <>

            <main>

                <div className="form">
                    <label htmlFor="topInput"> Top Text
                        <input type="text" name="topInput" id="topInput" onChange={handleOnChange} value={meme.topText}/>
                    </label>
                    <label htmlFor="bottomInput"> Bottom Text
                        <input type="text" name="bottomInput" id="bottomInput" onChange={handleOnChange} value={meme.bottomText}/>
                    </label>
                    <button onClick={handleChangeImage}>Get a new meme image 🖼</button>
                </div>

                <div className="meme">

                    <img src={meme.imageUrl} />
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>

                </div>
                

            </main>

        </>
    )
}