import React from 'react'
import {useLocation} from 'react-router-dom';
import image from './assets/images/bloomberg.png'
import './moreinfo.css'

function MoreInfo() {

  const {state} = useLocation();
  
  const {posts,idx} = state 

  console.log(idx)

  return (
    <div className='info-main-div'>
     {posts && (
      <>
        {/* <img src={posts[idx]?.urlToImage} />

        <h1>{posts[idx]?.title}</h1>
        <p>{posts[idx]?.description}</p> */}
        <div className='info-div'>
          <div>
            <img className='info-image' src={posts[idx]?.urlToImage} />
          </div>
          <div className='heading'>
           {
            posts[idx]?.title
           }</div>
          <div>
            <div>
             {
              posts[idx]?.content
             }
            </div>
          </div>
        </div>       
      </>
    )}
    </div>
  )
}

export default MoreInfo