import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='container mx-auto my-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-slate-500'>
            <div><Image alt='person' src='' className='bg-red-400 h-64 w-96'></Image></div>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perferendis.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perferendis.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perferendis.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perferendis.</h1>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perferendis.</h1>
            </div>
        </div>
    </div>
  )
}

export default About