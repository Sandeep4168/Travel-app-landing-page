import React from 'react';

const SelectsCard = (props) => {
  return (
    <div className='relative hover:scale-105 duration-300 rounded-xl '>
      <img className='w-full h-full object-cover rounded-xl' src={props.bg} alt='/' />
      <div className='bg-gray-900/30  hover:bg-slate-200/20  absolute top-0 left-0 w-full h-full rounded-xl'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;