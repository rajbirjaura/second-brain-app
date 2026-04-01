import React from 'react'
import { Button } from '../../brainly-frontend/src/components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


const App = () => {
  return (
    <div>
      
      <Button startIcon={<ShareIcon size='md'/>} variant='primary' text='Share' size='sm'/>
      <Button  startIcon={<PlusIcon size='md'/>} variant='secondary' text='Add Content' size='md'/>
      
    </div>
  )
}

export default App
