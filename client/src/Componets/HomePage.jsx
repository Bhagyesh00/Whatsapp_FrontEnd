import React, { useState } from 'react'
import { TbCircleDashed } from "react-icons/tb"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineSearch } from 'react-icons/ai'
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import ChatCard from './ChatCard/ChatCard'
import MessageCard from './MessageCard/MessageCard'
import './HomePage.css'
// import { useNavigate } from "react-router-dom";
import Profile from './Profile/Profile'

const HomePage = () => {
    const [querys, setQuerys] = useState(null)
    const [currentChat, setCurrentChat] = useState(null)
    const [content, setContent] = useState("")
    const [isProfile, setIsProfile] = useState(false)
    // const navigate = useNavigate(false);

    const handleClickOnChatCard = () => [
        setCurrentChat(true)
    ]

    const handleSearch = () => { }

    const handleCreateNewMessage = () => { }
    const handleNavigate = () => {
        setIsProfile(true)
    }
    const handleCloseOpenProfile = ()=> {
        setIsProfile(false)
    }

    return (
        <div className='relative'>
            <div className='w-full py-14 bg-[#00a884]'></div>
            <div className='flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]'>
                <div className='left w-[30%] bg-[#e8e9ec] h-full'>
                    {/* Profile */}
                    {isProfile &&
                        <div className='w-full h-full'>
                            <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
                        </div>}
                    {!isProfile &&
                        <div className='w-full'>

                            {/* Home */}
                            {<div className='flex justify-between items-center p-3'>
                                <div onClick={handleNavigate} className='flex items-center space-x-3'>
                                    <img className='rounded-full w-10 h-10 cursor-pointer' src="https://shorturl.at/glIOP" alt="" />
                                    <p>Wify Smart Home</p>
                                </div>
                                <div className='space-x-3 text-2xl flex'>
                                    <TbCircleDashed />
                                    <BiCommentDetail />
                                </div>
                            </div>}

                            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                                <input className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2' type="text" placeholder='search or start new chat'
                                    onChange={(e) => {
                                        setQuerys(e.target.value)
                                        handleSearch(e.target.value)
                                    }}
                                    value={querys}
                                />
                                <AiOutlineSearch className='left-5 top-7 absolute' />
                                <div>
                                    <BsFilter className='ml-4 text-3xl' />
                                </div>
                            </div>
                            {/* all user */}
                            <div className='bg-white overflow-y-scroll h-[72vh] px-3'>

                                {querys &&
                                    [1, 1, 1, 1, 1].map((item) => (
                                        <div onClick={handleClickOnChatCard}>
                                            {" "}
                                            <hr /><ChatCard />{" "}
                                        </div>
                                    ))}
                            </div>


                        </div>}
                </div>

                {/* default what up page */}

                {!currentChat &&
                    <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                        <div className='max-w-[70%] text-center'>
                            <img src="#" alt="" />
                            <h1 className='text-4xl text-gray-600'>WhatsApp Web</h1>
                            <p className='my-9'>
                                Send & Receive message without keeping your phone online. Use WhatsApp on Up to 4 Linked devices & 1 phone at the same time.
                            </p>
                        </div>
                    </div>
                }

                {/* message part */}

                {currentChat &&
                    <div className='w-[70%] relative bg-blue-200'>
                        <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
                            <div className='flex justify-between'>
                                <div className='py-3 space-x-3 flex items-center px-3'>
                                    <img className='w-10 h-10 rounded-full' src="https://shorturl.at/glIOP" alt="" />
                                    <p>
                                        username
                                    </p>
                                </div>

                                <div className='py-3 flex space-x-4 items-center px-3'>
                                    <AiOutlineSearch />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>

                        {/* Message Section */}

                        <div className='px-10 h-[85vh] overflow-y-scroll'>
                            <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                                {[1, 1, 1, 1, 1].map((item, i) =>
                                    <MessageCard isReqUserMessage={i % 2 === 0} content={"message"} />
                                )}
                            </div>
                        </div>

                        {/* Message Footer */}

                        <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>

                            <div className='flex justify-between items-center px-5 relative'>

                                <BsEmojiSmile className='cursor-pointer' />
                                <ImAttachment />

                                <input c
                                    className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
                                    type="text"
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder='Type message'
                                    value={content}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleCreateNewMessage()
                                            setContent()
                                        }
                                    }}
                                />
                                <BsMicFill />

                            </div>

                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

export default HomePage