import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { useState } from 'react'

function Dashboard() {
    const [open, setOpen] = useState(false)

    return (
        <div className='bg-[rgb(21,20,27)] min-h-screen bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_50%,_rgba(52,5,119,1)_75%,_rgba(56,3,129,1)_87%)] relative flex lg:px-3'>
            <div className='flex z-10 lg:mt-4 w-[60vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[20rem] absolute'>
                <motion.div initial={open ? 'hidden' : 'visible'} variants={{ hidden: { width: 0, opacity: 0 }, visible: { width: '100%', opacity: 1, transition: { duration: 0.5, delay: 0.2 } } }} animate={open ? 'visible' : 'hidden'} className='h-[100vh] bg-[#340577] rounded-md lg:h-[95vh]'>
                </motion.div>
                <motion.span className='bg-transparent' variants={{ hidden: { x: 0, y: 5 }, visible: { x: -70, y: 5, transition: { delay: 0.2, duration: 0.5 } } }} initial={open ? 'hidden' : 'visible'} whileInView={open ? 'visible' : 'hidden'}>
                    <Button className='w-fit mx-1 my-2 bg-transparent hover:bg-transparent flex flex-col items-start leading-3 shadow-none relative' onClick={() => setOpen((prev) => !prev)}>
                        <motion.span
                            variants={{ open: { rotate: 45, position: 'absolute', top: 10 }, closed: { rotate: 0, position: 'static', transition: { delay: 0.2, duration: 0.5 } } }}
                            initial={open ? 'open' : 'closed'}
                            whileInView={open ? 'open' : 'closed'}
                            className='w-6 h-[1px] bg-white' />
                        <motion.span
                            variants={{ open: { rotate: -45, position: 'absolute', top: 10, width: '24px' }, closed: { rotate: 0, position: 'static', width: '16px', transition: { delay: 0.2, duration: 0.5 } } }}
                            initial={open ? 'open' : 'closed'}
                            whileInView={open ? 'open' : 'closed'}
                            className='w-4 h-[1px] bg-white -rotate-45 absolute top-0' />
                        <motion.span
                            variants={{ open: { width: '0', rotate: -45, position: 'absolute', top: 0 }, closed: { width: '12px', position: 'static', rotate: 0, transition: { delay: 0.2, duration: 0.5 } } }}
                            initial={open ? 'open' : 'closed'}
                            whileInView={open ? 'open' : 'closed'}
                            className='w-3 h-[1px] bg-white' />
                    </Button>
                </motion.span>
            </div>
            <div className='pl-10 mt-12 mx-auto pr-4  text-xs overflow-y-auto h-[78vh] min-[500px]:px-12 sm:px-16 md:text-sm md:px-20 lg:px-24 lg:w-[65vw] lg:text-base xl:w-[60vw]'>
                <div className='flex mt-4 text-white gap-2 items-start lg:mt-6'>
                    <div className='rounded-sm bg-[rgb(21,20,27)] bg-[linear-gradient(30deg,_rgba(21,20,27,1)_9%,_rgba(255,255,255,1)_87%)] w-4 h-4 mt-1 lg:w-5 lg:h-5 lg:mt-2' />
                    <p className='w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, expedita nulla accusamus labore quas numquam repellat porro aperiam! Repellendus, corporis.</p>
                </div>
                <div className='flex mt-4 text-white gap-2 items-start lg:mt-6'>
                    <div className='rounded-sm bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5] font-medium tracking-widest lg:font-bold lg:tracking-wider'>AF</div>
                    <p className='w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, expedita nulla accusamus labore quas numquam repellat porro aperiam! Repellendus, corporis.</p>
                </div>
            </div>
            <motion.span
                initial={{ opacity: 0, y: 80 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className='w-[84%] absolute bottom-6 left-[8%] flex gap-2 sm:w-[64%] sm:left-[18%] lg:w-[50%] lg:bottom-10 lg:left-[25%] lg:h-fit xl:w-[40%] xl:left-[30%]'>
                <input type="text" className='bg-[#340577] w-full rounded-md px-1 py-1 text-white h-8' />
                <div className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
                    <Button className="bg-black text-white rounded-lg h-8 px-3 text-xs lg:px-4 lg:py-2 lg:text-base">
                        Generate
                    </Button>
                </div>
            </motion.span>
        </div>
    )
}

export default Dashboard
