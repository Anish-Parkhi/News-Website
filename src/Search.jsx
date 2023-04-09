import React from 'react'
import { useLocation } from 'react-router-dom'
import img from './assets/images/NA.png'
import './Search.css'

function Search() {

  const { state } = useLocation();

  const { posts,shodh } = state;

  console.log(shodh)

  return (

    <>
    {
      posts && (
      <div className='search-div'>
        <div className='search-topic' >Topics: {shodh}</div>
        <div className="search-div-subHead">
        World news about {shodh}, including breaking news and archival articles published in The NewsWave.
        </div>
        <hr/>
      {
        posts.map((item,index) => {
          return(
          <>
          <div key={index}  className="search-main-div">
            <div>Published at: {item?.publishedAt}</div>
            <div className="search-side-div">
              <div className='search-side-div-head'>{item?.title}</div>
              <div className='search-side-div-subHead'>{item?.description}</div>
              <a target='blank' href={item.url}>View More</a>
            </div>
            {
              item.urlToImage === null ? <div className='search-image-div'><img className='search-image' src={img}/></div> : <div className='search-image-div'><img className='search-image' src={item?.urlToImage}/></div>
            }
          </div>
          <hr/>
          </>
          )
        })
        }
      </div>
      )
    }

      

    </>



    // <div>
    //   {
    //     posts &&
    //     (
    //       <>
    //         <div>
    //           {
    //             posts.map(item => item.description)
    //           }
    //         </div>
    //       </>
    //     )
    //   }
    // </div>
  )
}

export default Search