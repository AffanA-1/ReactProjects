import { useCallback, useEffect, useState, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword ] = useState('')
  const passwordRef = useRef(null)

  function handleLengthChange (e){
      console.log(e.target.value);
      setLength(e.target.value)
  }


  // const passwordGeneration = useCallback(fn, [])
  // const passwordGeneration = useCallback(()=>{

  //   let pass = ""
  //   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  //   if(numberAllowed) str += '0123456789'
  //   if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

  //   for (let index = 1; index <= length; index++) {
  //     let char = Math.floor(Math.random() * str.length +1)
  //     pass +=str.charAt(char)
  //   }

  //   setPassword(pass)

  //   // if we dont add the dependency, it wont detect the changes form the prevous version. And the point of cache is to distinquish between different Versions of itself and run when there is anew versoin \

  // }, [])

  const passwordGeneration = useCallback(()=>{

    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str += '0123456789'
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass +=str.charAt(char)
    }

    setPassword(pass)

    // if we dont add the dependency, it wont detect the changes form the prevous version. And the point of cache is to distinquish between different Versions of itself and run when there is anew versoin \

  }, [numberAllowed, length, charAllowed])


  useEffect(()=>{
    passwordGeneration()
  }, [length, numberAllowed, charAllowed])

  const copyToClipboard = () => {
    passwordRef.current.select();
    console.log(passwordRef.current);
    window.navigator.clipboard.writeText(password)
  }


  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3' > Password Generator</h1>
        <div className="flex shadow mb-4 overflow-hidden rounder-lg">
          <input type="text" className="py-1 px-3 w-full bg-amber-50 outline-none" placeholder="Password" readOnly value={password} ref={passwordRef}/>
          <button className="bg-blue-700 px-3 py-1 shrink-0 outline-none text-white" onClick={copyToClipboard}>Copy</button>

        </div>

        <div className="flex text-sm gap-x-2">


          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={handleLengthChange}
              value={length}

            />
            <label> Length: {length} </label>

          </div>



          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              className="cursor-pointer"
              onChange={() => setNumberAllowed(prev => !prev)}
              defaultChecked={numberAllowed}

            />
            <label> Number </label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              className="cursor-pointer"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}

            />
            <label> Charachter </label>

          </div>

        </div>




      </div>

    </>
  )
}

export default App
