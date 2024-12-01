import './App.css'
import { motion } from 'motion/react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { SignInButton } from '@clerk/clerk-react'

function App() {
  const [selected, setSelect] = useState('1')
  const staggerChildrenVariants = { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } }
  const staggerChildrenButtonNotSelected = { outline: '1px', outlineColor: 'white', outlineStyle: 'solid' }
  const staggerChildrenButtonSelected = { outline: '1px', outlineColor: '#e151f7', outlineStyle: 'solid' }


  return (
    <div className='bg-[#15141B] divide-y divide-slate-800'>
      <div className='bg-[rgb(21,20,27)] min-h-screen bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_60%,_rgba(52,5,119,1)_80%,_rgba(56,3,129,1)_90%)] items-center flex-col flex px-16 py-14 text-white'>
        <h1 className='text-6xl font-bold text-center mt-10'><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>Transform Your Ideas</span><br />Into Actionable Workflows Instantly!</h1>
        <p className='text-center mt-6 text-lg'>Whether you’re an automation beginner or an expert, Autoflow enables you to craft, customize, and deploy<br />Kestra workflows with just a few words. No coding or configuration required.</p>
        <span className='mt-8 w-[26rem] flex justify-between'>
          <SignInButton>
            <Button className='bg-[#4b0baa8f] text-lg hover:bg-[#4b0baa] px-5 py-5'>Get Started for Free</Button>
          </SignInButton>
          <Button className='hover:bg-[#323236] text-lg px-5 py-5'>Explore Demo</Button>
        </span>
        <motion.img initial={{ y: 80, opacity: 0 }} viewport={{ once: true }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-[75%] mt-16' alt="" />
      </div>
      <div className='flex justify-between items-center px-16 py-16 overflow-hidden'>
        <motion.div className='w-[45%] text-white' viewport={{ once: true }} initial={'hidden'} whileInView={'visible'} variants={{ hidden: { x: -80, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } }}>
          <h2 className='text-5xl leading-tight font-bold w-fit'> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
            Effortlessly Generate
          </span><br />YAML Files with Prompts</h2>
          <p className='mt-6 text-base font-medium w-fit'>Transform your workflow creation with our innovative YAML generation tool.<br />Simply input your requirements, and let Autoflow create the YAML file for you.</p>
          <div className='flex justify-between mt-6 w-full'>
            <span>
              <h3 className='font-semibold text-lg'>Easy Automation</h3>
              <p className='mt-3'>Streamline your tasks by generating YAML<br />files quickly and efficiently.</p>
            </span>
            <span>
              <h3 className='font-semibold text-lg'>User-Friendly</h3>
              <p className='mt-3'>No coding skills needed—just prompt<br />and copy your YAML file.</p>
            </span>
          </div>
        </motion.div>
        <motion.img initial={{ x: 80, opacity: 0 }} viewport={{ once: true }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-[52%]' alt="" />
      </div>
      <div className='text-white flex flex-col items-center text-center py-16 px-16'>
        <h1 className='text-5xl font-medium'>What is <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>Kestra</span></h1>
        <p className='mt-4 text-lg font-medium'>Kestra is an open-source orchestration platform designed to automate and manage complex workflows at scale. </p>
        <div className='flex mt-16 w-full overflow-hidden'>
          <motion.img initial={{ x: -80, opacity: 0 }} viewport={{ once: true }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-[60%]' alt="" />
          <motion.div initial={'hidden'} whileInView={'visible'} viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.5 } } }} className='flex flex-col items-end w-[40%] justify-center overflow-hidden pr-1'>
            <motion.span variants={staggerChildrenVariants}>
              <Button onClick={() => setSelect("1")} className='text-xl px-6 py-8 my-4 outline w-[30rem]' style={selected == '1' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Design workflows visually or using YAML files.</Button>
            </motion.span>
            <motion.span variants={staggerChildrenVariants}>
              <Button onClick={() => setSelect("2")} className='text-xl px-6 py-4 my-4 outline text-pretty h-fit w-[30rem]' style={selected == '2' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Integrate seamlessly with a wide variety of data pipelines, cloud services, and on-premise systems.</Button>
            </motion.span>
            <motion.span variants={staggerChildrenVariants}
            ><Button onClick={() => setSelect("3")} className='text-xl px-6 py-4 my-4 outline text-pretty h-fit w-[30rem]' style={selected == '3' ? staggerChildrenButtonSelected : staggerChildrenButtonNotSelected}>Monitor and optimize workflows with real-time insights and logs.</Button>
            </motion.span>
          </motion.div>
        </div>
      </div>
      <footer className='flex justify-between px-16 py-16 text-white'>
        <div className='flex flex-col w-4/12'>
          <h1 className='text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>AutoFlow</h1>
          <p className='mt-2 text-base'>Subscribe to Kestra's newsletter for the latest features, updates, and releases.</p>
          <span className='flex mt-6 w-full gap-4'>
            <input className='bg-transparent w-full border border-white rounded-sm' type="text" />
            <div className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
              <Button className="bg-black text-white px-4 py-2 rounded-lg">
                Join
              </Button>
            </div>
          </span>
        </div>
        <div className='grid grid-cols-3 w-5/12'>
          <div>
            <p className='font-bold'>Ouick Links</p>
            <span className='grid grid-rows-6 gap-3 mt-8'>
              <p>Get Started</p>
              <p>Support Center</p>
              <p>FAQ</p>
              <p>Blogs</p>
              <p>Contact Us</p>
            </span>
          </div>
          <div>
            <p className='font-bold'>Connect With Us</p>
            <span className='grid grid-rows-6 gap-3 mt-8'>
              <p>Community Forums</p>
              <p>Webinars</p>
              <p>Case Studies</p>
              <p>Partnership</p>
              <p>Career</p>
            </span>
          </div>
          <div>
            <p className='font-bold'>Stay Connected</p>
            <span className='grid grid-rows-6 gap-3 mt-8'>
              <p className='flex items-center'><img src="/facebook.png" className='h-5 mr-2' alt="" />Facebook</p>
              <p className='flex items-center'><img src="/instagram.png" className='h-5 mr-2' alt="" />Instagram</p>
              <p className='flex items-center'><img src="/x.png" className='h-5 mr-2' alt="" />Twitter</p>
              <p className='flex items-center'><img src="/linkedin.png" className='h-5 mr-2' alt="" />LinkedIn</p>
              <p className='flex items-center'><img src="/youtube.png" className='h-5 mr-2' alt="" />Youtube</p>
            </span>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App
