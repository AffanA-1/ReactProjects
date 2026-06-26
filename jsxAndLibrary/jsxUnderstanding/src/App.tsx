import React from 'react'
import './App.css'

function App() {

  const customElements = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'

    },
    children: 'Children Text'
  }
  // The above wont work, since Return Doesnt knows honw to comple that.
  // Instead we would need to create a different createElement tag


  const reactElement =  React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "Children Text"
  )

  const functionElement = () => React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "Children Text"
  )

  

  return (
   <>
    {/* Use Evaluated Epxressions to include anything over here */}
    {reactElement}
    {/* YOu cant send objects to React Child */}
    {customElements}
    {/* YOYu can send functions */}
    {functionElement()}
   </>
  )
}

export default App
