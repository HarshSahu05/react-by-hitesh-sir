import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const user = "harsh"
const reactElement = React.createElement(
  'a',
  {
    href : 'hyyps://google.com',
    target: '_black'
  },
  'Click me to visit google',
  user
)

createRoot(document.getElementById('root')).render(

  reactElement
)
