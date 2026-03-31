import React from 'react'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'


const App = () => {
  return (
    <div>
      
      <Button variant='primary' text='share' size='sm'/>
      <Button  startIcon={<PlusIcon/>} variant='secondary' text='hello' size='md'/>
      
    </div>
  )
}

export default App
