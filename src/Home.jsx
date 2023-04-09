import React from 'react'
import "./Home.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from './assets/images/bloomberg.png'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Search from './Search';
import { useNavigate } from 'react-router-dom';

function Home() {

    const[search,setSearch] = useState(false)
    const[shodh,setShodh] = useState(null)
    const[posts,setPosts] = useState([])
    const[btn,setBtn] = useState(null)

    const navigate = useNavigate()

    const key = process.env.REACT_APP_API_KEY

    useEffect(()=>{
        axios
        .get(`https://newsapi.org/v2/everything?q=${shodh}&apiKey=${key}`)
        .then(res => {
            setPosts(res.data.articles)
        })
        .catch(err =>{
            console.log(err)
        })
    },[shodh])

    function handleClick(){
        setSearch(!search)
    }

  return (
    <div className='main-div'>
        <div className="top-bar">
            <Box className="icons">
                <div onClick={handleClick} >
                    <SearchIcon size="large" className='ic ic-2'/>
                </div>
                <NotificationsNoneIcon size="small" className='ic ic-3'/>
            </Box>
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="login">
                <div className="upper-btn">
                    <div className='btn'> <div className='person-icon'><PersonIcon style={{margin:"auto"}}/></div><div style={{margin
                    :"auto",marginLeft:"0px"}}>Login</div> </div>
                </div>
                <div className="upper-btn">
                    <div className='btn'> 
                    <div style={{margin:"auto"}}>Subscribe</div></div>
                </div>
            </div>
        </div>

        {/* Search bar  Componenet */}


        <div>
            {
                search === true ? <div className='searchBar-div'>
                    <input placeholder='Search' className='searchBar' onChange={e => {
                        setShodh(e.target.value)
                    }} />
                    <button className='search-button-div' onClick={()=>{
                        navigate('search',{state:{posts,shodh}});
                        setBtn(shodh);
                    }} >Go</button>
                </div> : null
            }
        </div>


        <hr style={{width:"95%",textAlign:"center",margin:"auto",backgroundColor:"grey"}}/>
        <Navbar />
    </div>
  )
}

export default Home