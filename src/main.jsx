import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type:'a',
//   props:{
//       href:'',
//       target:'_blank'
//   },
//   childern:'Click me to Visit Google'
// }
 
const anotherElement =(
  <a href='https://google.com' target='_blank'>Visit Google</a>
) 

const reactElement= React.createElement(
  'a',
  { 
    href:'https://google.com',
    target:'_blank'
  },
  'Click Me Vist Google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  // reactElement
)
