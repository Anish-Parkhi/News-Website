import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom' 

function Politics() {
  const[posts,setPosts] = useState(null)
  const[index,setIndex] = useState(null)

  const navigate = useNavigate()

  const key = process.env.REACT_APP_API_KEY

  function handleClick(idx){
      setIndex(idx)
      navigate('/moreInfo',{state:{posts,idx}})
  }

  useEffect(()=>{
      axios
          .get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`)
          .then(res=>{
              console.log(res.data.articles)
              setPosts(res.data.articles)
          })
          .catch(err=>{
              console.log(err)
          })
  },[])    

  const data = [1,2,3,4,5]

  
  const ans = data.reduce(getSum)
  
  function getSum(total, num) {
      return total-num ;
  }

  console.log(ans)

return (
  <div className='card-wrapper'>
      {
          posts?.map((item,index) => {
              return(
                  <div onClick={()=> handleClick(index)} key={index} className='card'>
                      <img alt='newsImg' className='card-image' src={item?.urlToImage} />
                      <div className='card-text'>
                          {
                              item?.title
                          }
                      </div>
                  </div>
              )
          })
      }
  </div>
)
}

export default Politics