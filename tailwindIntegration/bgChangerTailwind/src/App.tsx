import { useState } from 'react'


function App() {

  const [color, setColor] = useState("olive")

  return (
   <>

      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>


        {/* Bar */}
        <div className='fixed flex flex-wrap justify-center  py-2 left-12 inset-y-1/2'>
          {/* Buttons boxes */}
          <div className='flex flex-col flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

            <button 
              onClick={()=> setColor('red')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'red'}}
              
            >Red</button>
             <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'blue'}}
              onClick={()=> setColor('blue')}
            >Blue</button>
             <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'green'}}
              onClick={()=> setColor('green')}
            >Green</button>

          </div>
        </div>

      </div>

    

   </>
  )
}

export default App
