import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <div className='bg-[#15141B]'>
      <div className='bg-[rgb(21,20,27)] bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_50%,_rgba(52,5,119,1)_75%,_rgba(56,3,129,1)_87%)] items-center flex-col flex px-16 py-16 text-white'>
        <h1 className='text-5xl font-bold text-center mt-10'><span className='text-[#9677EE]'>Transform Your Ideas</span><br />Into Actionable Workflows Instantly!</h1>
        <p className='text-center mt-6 text-lg'>Whether you’re an automation beginner or an expert, Autoflow enables you to craft, customize, and deploy<br />Kestra workflows with just a few words. No coding or configuration required.</p>
        <span className='mt-8 w-[26rem] flex justify-between'>
          <Button className='bg-[#4b0baa8f] text-lg hover:bg-[#4b0baa] px-5 py-5'>Get Started for Free</Button>
          <Button className='hover:bg-[#323236] text-lg px-5 py-5'>Explore Demo</Button>
        </span>
        <img src="vite.svg" className='w-1/4' alt="" />
      </div>
      <div className='flex justify-between px-24 py-16'>
        <div className='w-[65%] text-white'>
          <h2 className='text-[34px] font-bold'> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
            Effortlessly Generate
          </span><br />YAML Files with Prompts</h2>
          <p className='mt-6 text-base font-medium'>Transform your workflow creation with our innovative YAML generation tool.<br />Simply input your requirements, and let Autoflow create the YAML file for you.</p>
          <div className='flex justify-between mt-6 w-5/6'>
            <span>
              <h3 className='font-semibold text-lg'>Easy Automation</h3>
              <p className='mt-3'>Streamline your tasks by generating YAML<br />files quickly and efficiently.</p>
            </span>
            <span>
              <h3 className='font-semibold text-lg'>User-Friendly</h3>
              <p className='mt-3'>No coding skills needed—just prompt<br />and copy your YAML file.</p>
            </span>
          </div>
        </div>
        <img src="vite.svg" className='w-[20%]' alt="" />
      </div>
      <div className='text-white flex flex-col items-center text-center py-16'>
        <h1 className='text-5xl font-medium'>What is <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5]'>Kestra</span></h1>
        <p className='mt-4 text-lg font-medium'>Kestra is an open-source orchestration platform designed to automate and manage complex workflows at scale. </p>
        <div className='flex mt-16 w-full px-16'>
          <img src="https://kestra.io/cdn-cgi/image/w=1280,h=830,f=webp,q=80/landing/home/ui-1.png" className='w-[60%]' alt="" />
          <div className='flex flex-col items-end w-[40%] justify-center'>
            <Button className='text-xl px-6 py-8 my-4 outline outline-1 outline-[#e151f7] w-[30rem]'>Design workflows visually or using YAML files.</Button>
            <Button className='text-xl px-6 py-4 my-4 outline outline-1 text-pretty h-fit outline-white w-[30rem]'>Integrate seamlessly with a wide variety of data pipelines, cloud services, and on-premise systems.</Button>
            <Button className='text-xl px-6 py-4 my-4 outline outline-1 text-pretty h-fit outline-white w-[30rem]'>Monitor and optimize workflows with real-time insights and logs.</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
