import React from 'react'
import './Navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { WbSunnyOutlined, NotificationsOutlined, EmailOutlined, PersonOutlined,
SearchOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Navbar = () => {
   return (
      <div className="navbar">
         <div className="left">
            <Link to='/' style={{textDecoration:'none'}}>
               <span>Memebook</span>
            </Link>
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon />
            <GridViewOutlinedIcon/>
            <div className="search">
               <SearchOutlined />
               <input type="text" placeholder='search' />
            </div>
         </div>
         <div className="right">
            <PersonOutlined />
            <EmailOutlined />
            <NotificationsOutlined />
            <div className="user">
               <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
               <span>John Doe</span>
            </div>
         </div>
      </div>
   )
}

export default Navbar
