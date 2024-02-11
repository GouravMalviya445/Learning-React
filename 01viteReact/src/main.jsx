import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return(
    <>
    <h1>Chai aur React !</h1>

    </>
  )
}

/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://www.google.com',
      target: '_blank'
  },
  children: 'Click to visit Google.'
} 
*/

const AnotherElement = (
  <a href="https://www.google.com" target='_blank'>hello</a>
)

// let anotherUser = 'code is here';
const ReactElement = React.createElement(
  'a',
  {'href': 'https://www.unsplash.com', target:'_blank'},
  'click here',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
  
)
