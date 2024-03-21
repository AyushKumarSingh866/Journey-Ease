import React from 'react'

const Advertise = ({brands}) => {

  return (
    <>
    <div>
        {brands?.map((val, i) =>(
            <img src={val.iconSrc} alt="brands/icon"  className='w-44 h-auto object-fill xl:w-38 lg:w-32' />
        ))}
    </div>
    </>
  )
}


export default Advertise