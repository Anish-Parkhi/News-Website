import './App.css'
import Home from './Home'
import Buisness from './Buisness'
import Politics from './Politics'
import Science from './Science'
import Tech from './Tech'
import {Route, Routes}  from 'react-router-dom'
import Navbar from './Navbar'
import TopNews from './TopNews'
import MoreInfo from './MoreInfo'
import Search from './Search'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Home/>
        <Routes>
            <Route exact  path='/' element={<TopNews/>} />
            <Route path='/buisness' element={<Buisness/>} />
            <Route path='/entertainment' element={<Politics/>} />
            <Route path='/science' element={<Science/>} />
            <Route path='/tech' element={<Tech/>} />
            <Route path='/moreInfo' element={<MoreInfo/>}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
    </>
  )
}

export default App
