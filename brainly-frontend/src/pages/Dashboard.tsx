import React, { useState } from 'react'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'



const Dashboard = () => {
  const [openmodal,setopenmodal] = useState(false);
  
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className='ml-72 min-h-screen bg-gray-200 p-4 '>
      <CreateContentModal open={openmodal} onClose={()=>{
        setopenmodal(false);
      }}/>
      
      <div className='flex justify-end gap-4'>
        <div onClick={()=>{
          setopenmodal(true);
        }}>
      <Button startIcon={<ShareIcon size='md'/>} variant='primary' text='Add Content' size='sm'/>
      </div>
      <Button  startIcon={<PlusIcon size='md'/>} variant='secondary' text='Share Brain' size='sm'/>
      </div>


      <div className='flex gap-4 ml-4'>
      <Card type='twitter' link='https://x.com/AmericanForce_/status/2039301279579799822' title='First Tweet'/>
      <Card type='youtube' link='https://www.youtube.com/watch?v=XY80f5Z40as' title='First Video'/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
