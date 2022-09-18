import React from 'react'

import BoraBora from '../assets/pic1.jpg';
import BoraBora2 from '../assets/pic2.jpg';
import Maldives from '../assets/pic3.jpg';
import Maldives2 from '../assets/pic3.jpg';
import Maldives3 from '../assets/pic4.jpg';
import KeyWest from '../assets/pic5.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora} text='Bora Bora' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={Maldives} text='Antigua' />
    <SelectsCard bg={Maldives2} text='Cozumel' />
    <SelectsCard bg={Maldives3} text='Jamaica' />
    <SelectsCard bg={KeyWest} text='Key West' />
    
        
    </div>
  )
}

export default Selects