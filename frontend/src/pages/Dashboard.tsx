import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createChat, deleteChat, getChat, updateChat } from '@/actions/chat'
import { useNavigate } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import { createMessage, getMessages } from '@/actions/message'
import { useToast } from '@/hooks/use-toast'


function Dashboard() {
    const [open, setOpen] = useState(false)
    const [selectedChat, selectChat] = useState("")
    const [prompt, setPrompt] = useState("")
    const { getToken } = useAuth()
    const [chats, setChats] = useState<{ today: { id: string, userid: string, created: Date, name: string, }[], yesterday: { id: string, userid: string, created: Date, name: string, }[], older: { id: string, userid: string, created: Date, name: string, }[] }>({ today: [], yesterday: [], older: [] })
    const [message, setMessage] = useState<{ id: string, created: Date, userid: string, chatid: string, content: { prompt: string, yaml: string } }[]>([])
    const navigate = useNavigate()
    const { toast } = useToast()
    const [editChat, activateEdit] = useState('')
    const [chatName, setChatName] = useState('')

    useEffect(() => {
        Promise.resolve(getPrompts()).then((activeChat) => {
            if (activeChat) {
                getMessage(activeChat)
            }
        })
    }, [])

    const sortDate = (data: any, funType?: string) => {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const yesterday = new Date(today)
        yesterday.setDate(today.getDate() - 1)
        const updatedChat = {
            today: [...chats.today],
            yesterday: [...chats.yesterday],
            older: [...chats.older],
        }
        if (funType == 'update') {
            if (new Date(data.created) >= today) {
                updatedChat.today = updatedChat.today.filter((e) => e.id != data.id)
            } else if (new Date(data.created) >= yesterday) {
                updatedChat.yesterday = [updatedChat.today.filter((e) => e.id != data.id), data]
            } else {
                updatedChat.older = [...updatedChat.older.filter((e) => e.id != data.id), data]
            }
            setChats(updatedChat)
            activateEdit("")
            return
        }
        if (funType == 'del') {
            if (new Date(data.created) >= today) {
                updatedChat.today = updatedChat.today.filter((e) => e.id != data.id)
            } else if (new Date(data.created) >= yesterday) {
                updatedChat.yesterday = updatedChat.yesterday.filter((e) => e.id != data.id)
            } else {
                updatedChat.older = updatedChat.older.filter((e) => e.id != data.id)
            }
            console.log(updatedChat)
            setChats(updatedChat)
            return
        }
        if (funType == 'add') {
            if (new Date(data.created) >= today) {
                updatedChat.today.push(data)
            } else if (new Date(data.created) >= yesterday) {
                updatedChat.yesterday.push(data)
            } else {
                updatedChat.older.push(data)
            }
            console.log(updatedChat)
            setChats(updatedChat)
            return
        }
        data.map((e: any) => {
            if (updatedChat?.today.find((f) => { return f.id == e.id }) || updatedChat?.yesterday.find((f) => { return f.id == e.id }) || updatedChat?.older.find((f) => { return f.id == e.id })) {
                return
            }
            if (new Date(e.created) >= today) {
                updatedChat.today.push(e)
            } else if (new Date(e.created) >= yesterday) {
                updatedChat.yesterday.push(e)
            } else {
                updatedChat.older.push(e)
            }
        })
        setChats(updatedChat)
        return updatedChat.today[0].id || updatedChat.yesterday[0].id || updatedChat.older[0].id
    }

    const getPrompts = async () => {
        const token = await getToken()
        if (token) {
            const res = await getChat(token)
            if (res.data) {
                const activeChat = sortDate(res.data)
                return activeChat
            }
            toast({ description: res.message })
            return
        }
        navigate('/')
    }

    const handlePrompt = async () => {
        const token = await getToken()
        if (token) {
            const res: { message: string, data: { id: string, userid: string, created: Date, name: string, }[] } = await createChat(token)
            if (res.data) {
                sortDate(res.data[0], 'add')
                return
            }
            toast({ description: res.message })
            return
        }
        navigate('/')
    }

    const handleDelete = async (chatid: string) => {
        const token = await getToken()
        if (token) {
            const res = await deleteChat(token, chatid)
            if (res.data) {
                sortDate(res.data[0], 'del')
                return
            }
            toast({ description: res.message })
            return
        }
        navigate('/')
    }

    const handleChatpdate = async (id: string, name: string) => {
        const token = await getToken()
        console.log(id, name)
        if (token) {
            const res = await updateChat(token, id, name)
            if (res.data) {
                sortDate(res.data[0], 'update')
                return
            }
            return
        }
        navigate('/')
    }

    const getMessage = async (chatid: string) => {
        const token = await getToken()
        if (token) {
            const res = await getMessages(token, chatid)
            if (res.data) {
                const dummyMessages = [...message]
                res.data.map((e: any) => {
                    if (dummyMessages?.find((f) => { return f.id == e.id })) {
                        return
                    }
                    dummyMessages.push(e)
                })
                setMessage(dummyMessages)
                return
            }
            toast({ description: res.message })
            return
        }
        navigate('/')
    }

    const handleMessage = async (chatid: string, prompt: string) => {
        const token = await getToken()
        if (token) {
            const res = await createMessage(token, chatid, prompt)
            if (res.data) {
                const dummyMessages = [...message]
                if (dummyMessages?.find((f) => { return f.id == res.data.id })) {
                    return
                }
                dummyMessages.push(res.data)
                setMessage(dummyMessages)
                return
            }
        }
        navigate('/')
    }

    return (
        <div className='bg-[rgb(21,20,27)] min-h-screen bg-[linear-gradient(15deg,_rgba(21,20,27,1)_9%,_rgba(22,19,37,1)_26%,_rgba(38,12,79,1)_50%,_rgba(52,5,119,1)_75%,_rgba(56,3,129,1)_87%)] relative flex lg:px-3'>
            <div className='flex z-10 lg:mt-4 w-[60vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[20rem] absolute'>
                <motion.div initial={open ? 'hidden' : 'visible'} variants={{ hidden: { width: 0, opacity: 0 }, visible: { width: '100%', opacity: 1, transition: { duration: 0.5, delay: 0.2 } } }} animate={open ? 'visible' : 'hidden'} className='h-[100vh] bg-[#340577] overflow-y-auto rounded-md lg:h-[95vh] py-10'>
                    {chats?.today.length > 0 && <motion.span id='today' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.4 } } }} animate={open ? 'visible' : 'hidden'} className='text-white font-medium mx-2 mb-8 flex flex-col'>
                        <p className='px-2 mb-2'>Today</p>
                        {chats?.today.map((data) => {
                            if (editChat == data.id) {
                                return (
                                    <span className='flex px-2 text-white rounded-md cursor-pointer w-full justify-between items-center gap-1'>
                                        <input className='bg-[#49109a] w-full rounded-md px-1 py-1 text-white h-8' type="text" />
                                        <span className='flex'>
                                            <img onClick={() => { activateEdit("") }} className='h-6 cursor-pointer' src="/close.png" alt="" />
                                            <img className='h-6 cursor-pointer' src="/check.png" alt="" />
                                        </span>
                                    </span>
                                )
                            }
                            return (
                                <span id={data.id} className='flex px-2 py-2  text-white rounded-md cursor-pointer w-full justify-between items-center' onClick={(e: any) => selectChat(e.currentTarget.id)} style={selectedChat == data.id ? { backgroundColor: "#49109a" } : undefined}>
                                    <p className='h-fit font-normal w-full'>{data.name}</p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='flex gap-1 w-5 h-fit justify-between'>
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='bg-[#340577] text-white'>
                                            <DropdownMenuItem onClick={() => { activateEdit(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Edit</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => { handleDelete(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </span>
                            )
                        })}
                    </motion.span>}
                    {chats?.yesterday.length > 0 && <motion.span id='yesterday' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.4 } } }} animate={open ? 'visible' : 'hidden'} className='text-white font-medium mx-2 mb-8 flex flex-col'>
                        <p className='px-2 mb-2'>Yesterday</p>
                        {chats?.yesterday.map((data) => {
                            if (editChat == data.id) {
                                return (
                                    <span className='flex px-2 text-white rounded-md cursor-pointer w-full justify-between items-center gap-1'>
                                        <input className='bg-[#49109a] w-full rounded-md px-1 py-1 text-white h-8' type="text" />
                                        <span className='flex'>
                                            <img onClick={() => { activateEdit("") }} className='h-6 cursor-pointer' src="/close.png" alt="" />
                                            <img className='h-6 cursor-pointer' src="/check.png" alt="" />
                                        </span>
                                    </span>
                                )
                            }
                            return (
                                <span id={data.id} className='flex px-2 py-2  text-white rounded-md cursor-pointer w-full justify-between items-center' onClick={(e: any) => selectChat(e.currentTarget.id)} style={selectedChat == data.id ? { backgroundColor: "#49109a" } : undefined}>
                                    <p className='h-fit font-normal w-full'>{data.name}</p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='flex gap-1 w-5 h-fit justify-between'>
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='bg-[#340577] text-white'>
                                            <DropdownMenuItem onClick={() => { activateEdit(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Edit</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => { handleDelete(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </span>
                            )
                        })}
                    </motion.span>}
                    {chats?.older.length > 0 && <motion.span id='older' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.4 } } }} animate={open ? 'visible' : 'hidden'} className='text-white font-medium mx-2 mb-8 flex flex-col gap-1'>
                        <p className='px-2 mb-2'>Last 30 Days</p>
                        {chats?.older.map((data) => {
                            if (editChat == data.id) {
                                return (
                                    <span className='flex px-2 text-white rounded-md cursor-pointer w-full justify-between items-center gap-1'>
                                        <input onChange={(e) => setChatName(e.target.value)} className='bg-[#49109a] w-full rounded-md px-1 py-1 text-white h-8' type="text" />
                                        <span className='flex'>
                                            <img onClick={() => { activateEdit("") }} className='h-6 cursor-pointer' src="/close.png" alt="" />
                                            <img onClick={() => { handleChatpdate(data.id, chatName) }} className='h-6 cursor-pointer' src="/check.png" alt="" />
                                        </span>
                                    </span>
                                )
                            }
                            return (
                                <span id={data.id} className='flex px-2 py-2  text-white rounded-md cursor-pointer w-full justify-between items-center' onClick={(e: any) => selectChat(e.currentTarget.id)} style={selectedChat == data.id ? { backgroundColor: "#49109a" } : undefined}>
                                    <p className='h-fit font-normal w-full'>{data.name}</p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='flex gap-1 w-5 h-fit justify-between'>
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                            <span className='h-1 rounded-full w-1 bg-white' />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='bg-[#340577] text-white'>
                                            <DropdownMenuItem onClick={() => { activateEdit(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Edit</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => { handleDelete(data.id) }} className='focus:bg-[#49109a] focus:text-white'>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </span>
                            )
                        })}
                    </motion.span>}
                </motion.div>
                <motion.span className='bg-transparent h-fit' variants={{ hidden: { x: 0, y: 5 }, visible: { x: -70, y: 5, transition: { delay: 0.2, duration: 0.5 } } }} initial={open ? 'hidden' : 'visible'} whileInView={open ? 'visible' : 'hidden'}>
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
            <div className='pl-10 mt-12 mx-auto pr-4 text-xs overflow-y-auto h-[78vh] min-[500px]:px-12 sm:px-16 md:text-sm md:px-20 lg:px-24 lg:w-[65vw] lg:text-base xl:w-[60vw]'>
                {message.map((data) => {
                    return (
                        <div id={data.id}>
                            <div className='flex mt-4 text-white gap-2 items-start lg:mt-6'>
                                <div className='rounded-sm bg-[rgb(21,20,27)] bg-[linear-gradient(30deg,_rgba(21,20,27,1)_9%,_rgba(255,255,255,1)_87%)] w-4 h-4 mt-1 lg:w-5 lg:h-5 lg:mt-2' />
                                <p className='w-fit'>{data.content.prompt}</p>
                            </div>
                            <div className='flex mt-4 text-white gap-2 items-start lg:mt-6'>
                                <div className='rounded-sm bg-clip-text text-transparent bg-gradient-to-r from-[#e151f7] to-[#5c47f5] font-medium tracking-widest lg:font-bold lg:tracking-wider'>AF</div>
                                <p className='w-fit'>{data.content.yaml}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <motion.span
                initial={{ opacity: 0, y: 80 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className='w-[84%] absolute bottom-6 left-[8%] flex gap-2 sm:w-[64%] sm:left-[18%] lg:w-[50%] lg:bottom-10 lg:left-[25%] lg:h-fit xl:w-[40%] xl:left-[30%]'>
                <input onChange={(e) => setPrompt(e.target.value)} onKeyDown={(event: any) => {
                    if (event.key == 'Enter') {
                        handlePrompt()
                    }
                }} type="text" className='bg-[#340577] w-full rounded-md px-1 py-1 text-white h-8' />
                <div className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#e151f7] to-[#5c47f5]">
                    <Button onClick={handlePrompt} className="bg-black text-white rounded-lg h-8 px-3 text-xs lg:px-4 lg:py-2 lg:text-base">
                        Generate
                    </Button>
                </div>
            </motion.span>
            <Toaster />
        </div>
    )
}

export default Dashboard
