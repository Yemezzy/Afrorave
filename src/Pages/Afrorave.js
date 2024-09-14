import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { LuFacebook } from 'react-icons/lu'

const Afrorave = () => {
  return (
    <div className='bmm'>
        <nav className='md:py-3 py-5 px-10  flex items-center justify-between text-xl font-bold '>
       <img src="/image/RAVE.svg" alt="image" className='md:w-[5%] w-20 md:mt-5'/> 
       <div>
        <marquee behavior="" direction="left">
        <p className='bg-[#DB0056] p-1'>Ravers get ready</p>   
        </marquee>
        </div> 
        </nav>

        <div className='md:px-10 px-3 bbc'>
            <div className='border- rounded-xl  h-[500px] border-black lol p-5'>
    {/* <div className='flex justify-center'>
    <div className='grid grid-cols-3 gap-10'>
            <section className=' w-[370px] h-[300px] pp1 border- border-black'>
           
            </section>
            <section className='h-[300px] pp2 w-[370px] border- border-black'>
           
            </section>
            <section className='h-[300px] pp3 w-[370px] border- border-black'>

            </section>
        </div>
    </div>
    <div className='flex justify-center'>
    <div className='grid grid-cols-2 gap-10 mt-2'>
            <section className=' w-[370px] h-[300px] pp4 border- border-black'>
           
            </section>
            <section className='h-[300px] pp5 w-[370px] border- border-black'>
           
            </section>
        </div>
    </div> */}
            </div>

            <div className='md:mt-10 mt-5'>
<p className='md:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci aspernatur voluptas consectetur omnis nihil pariatur esse, 
    repellat, nisi possimus eos officia, officiis sint deleniti. Magni non voluptatum perferendis mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Reprehenderit fugit dolores tempora impedit repellat aliquam quaerat iusto itaque asperiores nesciunt.</p>
            </div>


            <div className='mt-10 md:flex items-center justify-between rounded-2xl bg-[#DB0056] p-5 md:h-[150px] '>
<div>
<p className='font-bold md:text-xl'>Are you ready RAVERS?</p>
<p className='font-bold md:text-3xl'>Subscribe to our newsletter</p>
</div>
<div className=' md:w-[50%] mt-3 md:mt-0'>
<p className='font-bold md:text-lg text-right '>Enter your email address here</p>
<div className='flex'>
<input type="text" className='outline-none px-2 rounded-sm h-[50px] w-full'/>
<button className='h-[50px] bg-black text-white p-3 md:text-base text-sm'>Subscribe</button>
</div>
</div>
            </div>

            <div className='flex gap-10 md:py-10 py-5 text-2xl justify-center text-[#DB0056] uppercase font-semibold'>
    <FaInstagram/>
    <FaXTwitter />
    <LuFacebook />
   
</div>

        </div>
    </div>
  )
}

export default Afrorave