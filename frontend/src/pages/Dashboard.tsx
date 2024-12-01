import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { useState } from 'react'

function Dashboard() {
    const [open, setOpen] = useState(true)
    return (
        <div className='bg-[rgb(21,20,27)] min-h-screen bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_50%,_rgba(52,5,119,1)_75%,_rgba(56,3,129,1)_87%)] relative flex px-8'>
            <div className='flex mt-[10vh]'>
                <motion.div initial={open ? 'hidden' : 'visible'} variants={{ hidden: { width: 0, opacity: 0 }, visible: { width: '18vw', opacity: 1, transition: { duration: 0.5, delay: 0.2 } } }} whileInView={open ? 'visible' : 'hidden'} className='h-[80vh] bg-[#340577] rounded-md'>
                </motion.div>
                <motion.span variants={{ hidden: { x: 0, y: 5 }, visible: { x: -80, y: 5, transition: {delay: 0.2, duration: 0.5}} }} initial={open ? 'hidden' : 'visible'} whileInView={open ? 'visible' : 'hidden'}>
                    <Button className='mx-2' onClick={() => setOpen((prev) => !prev)}>Close</Button>
                </motion.span>
            </div>
            <div></div>
            <motion.span initial={{ opacity: 0, y: 80 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className='absolute bottom-10 left-[30%] w-[40%] flex gap-2'>
                <input type="text" className='bg-[#340577] w-full rounded-md px-1 py-1' />
                <div className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
                    <Button className="bg-black text-white px-4 py-2 rounded-lg">
                        Generate
                    </Button>
                </div>
            </motion.span>
        </div>
    )
}

export default Dashboard
