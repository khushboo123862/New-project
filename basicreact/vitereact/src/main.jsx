import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>custom App</h1>
    </div>
  )
}

/*const ReactElement ={
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}  */

    const anotherElement = (
  <a href="https://google.come" target='_blank'>visit google</a>

    
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
 'click me to visit google'
  
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
