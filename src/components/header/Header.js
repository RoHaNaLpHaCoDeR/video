import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }
   const user = useSelector(state => state.auth?.user)
   let iconStyles = { color: "black" };
   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
            color="black"
         />
         
         <img
            // src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            src='https://cdn.icon-icons.com/icons2/791/PNG/512/YOUTUBE_icon-icons.com_65487.png'
            alt=''
            className='header__logo'
         />
         <h5 className='header__heading'>Video Streamer</h5>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} color="white"/>
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} style={iconStyles}/>
            <MdApps size={28} style={iconStyles}/>
            <img src={user?.photoURL} alt='avatar' />
         </div>
      </div>
   )
}

export default Header
