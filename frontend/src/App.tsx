import './App.css'
import { motion } from 'motion/react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { SignInButton } from '@clerk/clerk-react'

function App() {
  const [selected, setSelect] = useState('1')
  const staggerChildrenVariants = { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } }
  const staggerChildrenButtonNotSelected = { border: '1px', borderColor: 'white', borderStyle: 'solid' }
  const staggerChildrenButtonSelected = { border: '1px', borderColor: '#e151f7', borderStyle: 'solid' }

  return (
    <div className='bg-[#15141B] divide-y divide-slate-800'>
      <div
        className='bg-[rgb(21,20,27)] bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_60%,_rgba(52,5,119,1)_80%,_rgba(56,3,129,1)_90%)] items-center flex-col flex text-white px-6
      min-[560px]:px-12 min-[560px]:py-14 
      sm:px-16
      lg:px-20 
      xl:px-28'>
        <h1
          className='text-4xl font-bold text-center mt-14 text-pretty 
        min-[560px]:text-4xl 
        md:text-5xl 
        lg:text-6xl'
        ><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>Transform Your Ideas</span><br />Into Actionable Workflows Instantly!</h1>
        <p className='text-center mt-6 text-base text-pretty min-[560px]:font-medium sm:text-lg'>Whether you’re an automation beginner or an expert, Autoflow enables you to craft, customize, and deploy Kestra workflows with just a few words. No coding or configuration required.</p>
        <span className='mt-8 md:w-[26rem] flex justify-between w-5/6'>
          <SignInButton forceRedirectUrl={'/dashboard'}>
            <Button
              className='bg-[#4b0baa8f] hover:bg-[#4b0baa] px-1 py-1 text-xs w-fit 
            min-[375px]:px-3 min-[560px]:text-sm min-[560px]:px-5 min-[560px]:py-5 
            sm:text-base 
            lg:text-lg'
            >Get Started for Free</Button>
          </SignInButton>
          <Button
            className='hover:bg-[#323236] text-xs w-fit px-1 py-1 
          min-[560px]:text-sm min-[560px]:px-5 min-[560px]:py-5 min-[375px]:px-3 
          md:text-base 
          lg:text-lg'
          >Explore Demo</Button>
        </span>

        <span className='w-full aspect-square mx-auto min-[560px]:aspect-auto'>
          <motion.img initial={{ y: 80, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-full mt-14 mx-auto lg:w-[85%] xl:w-[75%]' alt="" />
        </span>

      </div>
      <div className='flex flex-wrap justify-between items-center py-10 px-6 overflow-hidden min-[560px]:px-12 min-[560px]:py-14 sm:px-16 lg:px-10 lg:py-16 lg:gap-6 lg:relative xl:px-20 xl:py-16'>

        <motion.div className='w-full text-white lg:w-[47%] lg:mt-32 xl:mt-0 xl:w-[45%]' viewport={{ once: true }} initial={'hidden'} whileInView={'visible'} variants={{ hidden: { x: -80, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } }}>
          <h2
            className='text-3xl text-center leading-tight w-fit mx-auto font-semibold 
          sm:text-4xl 
          md:text-5xl md:font-bold  
          lg:absolute lg:text-center lg:w-full lg:top-14 lg:left-0 
          xl:static xl:text-start'
          > <span className="bg-clip-text text-transparent mx-auto bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
              Effortlessly Generate
            </span><br />YAML Files with Prompts</h2>
          <p
            className='mt-6 text-xs text-center font-medium w-fit text-pretty mx-auto 
          sm:text-sm 
          md:text-base 
          lg:text-lg lg:mt-8 lg:text-start lg:px-4 xl:px-0 
          xl:text-start'
          >Transform your workflow creation with our innovative YAML generation tool. Simply input your requirements, and let Autoflow create the YAML file for you.</p>
          <div className='flex justify-between mt-8 w-full gap-6 md:mt-14 lg:px-4 lg:mt-24 xl:mt-8 xl:px-0'>
            <span>
              <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Easy Automation</h3>
              <p className='mt-3 text-xs text-pretty sm:text-sm md:text-base'>Streamline your tasks by generating YAML<br />files quickly and efficiently.</p>
            </span>
            <span>
              <h3 className='font-semibold text-sm text-end sm:text-base md:text-lg xl:text-start'>User-Friendly</h3>
              <p className='mt-3 text-xs text-end text-pretty sm:text-sm md:text-base xl:text-start'>No coding skills needed—just prompt<br />and copy your YAML file.</p>
            </span>
          </div>
        </motion.div>

        <motion.img initial={{ x: 80, opacity: 0 }} viewport={{ once: true }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-full mx-auto mt-8 sm:mt-10 lg:w-[50%] lg:mt-40 xl:mt-0 xl:mx-0 xl:w-[52%]' alt="" />
      </div>
      <div
        className='text-white flex flex-col items-center text-center px-6 py-8 
      min-[560px]:px-12 min-[560px]:py-14 
      sm:py-16 sm:px-16 
      lg:px-12 
      xl:py-16'
      >
        <h1 className='text-3xl font-medium sm:text-4xl md:text-5xl'>What is <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>Kestra</span></h1>
        <p className='mt-4 text-sm sm:text-base md:text-lg md:font-normal'>Kestra is an open-source orchestration platform designed to automate and manage complex workflows at scale. </p>
        <div className='flex mt-8 w-full overflow-hidden flex-wrap sm:mt-12 lg:mt-16 lg:gap-4'>

          <motion.img initial={{ x: -80, opacity: 0 }} viewport={{ once: true }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-[95%] mx-auto lg:w-[53%]' alt="" />

          <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.5 } } }} className='flex flex-col w-[95%] mx-auto justify-center items-center overflow-hidden mt-6 md:items-end lg:w-[45%] lg:pr-1 lg:mt-0'>

            <motion.span className='w-full' variants={staggerChildrenVariants}>
              <Button onClick={() => setSelect("1")}
                className='my-4 px-2 mx-1 py-3 text-xs border w-11/12 h-fit text-pretty 
              sm:py-4 sm:px-4 sm:text-base 
              md:text-lg 
              lg:text-lg lg:px-2 lg:py-3 lg:w-11/12'
                style={selected == '1' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Design workflows visually or using YAML files.</Button>
            </motion.span>
            <motion.span className='w-full' variants={staggerChildrenVariants}>
              <Button onClick={() => setSelect("2")}
                className='my-4 px-2 mx-1 py-2 text-xs border w-11/12 h-fit text-pretty 
              sm:py-4 sm:px-4 sm:text-base 
              md:text-lg 
              lg:text-lg lg:px-2 lg:py-3 lg:w-11/12'
                style={selected == '2' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Integrate seamlessly with a wide variety of data pipelines, cloud services, and on-premise systems.</Button>
            </motion.span>
            <motion.span className='w-full' variants={staggerChildrenVariants}
            ><Button onClick={() => setSelect("3")}
              className='my-4 px-2 mx-1 py-2 text-xs border w-11/12 h-fit text-pretty 
            sm:py-4 sm:px-4 sm:text-base 
            md:text-lg 
            lg:text-lg lg:px-2 lg:py-3 lg:w-11/12'
              style={selected == '3' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Monitor and optimize workflows with real-time insights and logs.</Button>
            </motion.span>

          </motion.div>
        </div>
      </div>
      <footer className='flex flex-wrap justify-between px-4 pt-8 pb-4 text-white lg:px-10 lg:py-2'>
        <div className='flex flex-col w-10/12 mx-auto justify-center lg:w-4/12'>
          <h1 className='text-2xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5] sm:text-4xl md:text-5xl'>AutoFlow</h1>
          <p className='mt-2 sm:text-base text-xs text-center text-pretty'>Subscribe to Kestra's newsletter for the latest features, updates, and releases.</p>
          <span className='flex mt-6 w-full gap-4'>
            <input className='bg-transparent w-full border border-white rounded-sm h-8' type="text" />
            <div className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
              <Button
                className="bg-black text-white text-xs rounded-lg
              sm:px-4 sm:py-2 h-8 sm:text-base"
              >
                Join
              </Button>
            </div>
          </span>
        </div>
        <div className='grid grid-cols-3 mt-8 w-full mx-auto gap-2 lg:w-7/12 lg:pt-4'>
          <div>
            <p className='font-bold text-xs text-center sm:text-base md:text-lg'>Ouick Links</p>
            <span
              className='grid grid-rows-6 mt-8 text-xs gap-4 text-center items-center 
            sm:gap-3 sm:text-base md:text-lg'>
              <p>Get Started</p>
              <p>Support Center</p>
              <p>FAQ</p>
              <p>Blogs</p>
              <p>Contact Us</p>
            </span>
          </div>
          <div>
            <p className='font-bold text-xs text-center sm:text-base md:text-lg'>Connect With Us</p>
            <span
              className='grid grid-rows-6 mt-8 text-xs text-center items-center 
            min-[355px]:gap-4 sm:gap-3 
            sm:text-base 
            md:text-lg'>
              <p>Community Forums</p>
              <p>Webinars</p>
              <p>Case Studies</p>
              <p>Partnership</p>
              <p>Career</p>
            </span>
          </div>
          <div>
            <p className='font-bold text-xs text-center sm:text-base md:text-lg'>Stay Connected</p>
            <span
              className='grid grid-rows-6 sm:gap-3 mt-8 text-xs gap-4 text-center items-center justify-center 
            sm:text-base 
            md:text-lg'>
              <p className='flex items-center'><img src="/facebook.png" className='h-4 mr-1 sm:h-5 sm:mr-2' alt="" />Facebook</p>
              <p className='flex items-center'><img src="/instagram.png" className='h-4 mr-1 sm:h-5 sm:mr-2' alt="" />Instagram</p>
              <p className='flex items-center'><img src="/x.png" className='h-4 mr-1 sm:h-5 sm:mr-2' alt="" />Twitter</p>
              <p className='flex items-center'><img src="/linkedin.png" className='h-4 mr-1 sm:h-5 sm:mr-2' alt="" />LinkedIn</p>
              <p className='flex items-center'><img src="/youtube.png" className='h-4 mr-1 sm:h-5 sm:mr-2' alt="" />Youtube</p>
            </span>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App
