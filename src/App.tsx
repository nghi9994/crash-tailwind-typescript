import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className='grid grid-cols-5'>
      <Nav />
      <main className='col-span-4 bg-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit labore mollitia, rem perspiciatis obcaecati unde aut reprehenderit earum ad commodi, repellat repellendus facere eaque! Modi, quaerat! Aspernatur, reiciendis minus.
      </main>
    </div>
  )
}

export default App
