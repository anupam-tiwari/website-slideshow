import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate(); 

  return (
    <div><div>
    <div>Website Slideshow</div>
    <div>
      <div><input placeholder="website 1" type='text' onChange={(e) => localStorage.setItem('website-1',JSON.stringify(e.target.value))}></input></div>
      <div><input placeholder="website 2" type='text' onChange={(e) => localStorage.setItem('website-2',JSON.stringify(e.target.value))}></input></div>
      <div><input placeholder="website 3" type='text' onChange={(e) => localStorage.setItem('website-3',JSON.stringify(e.target.value))}></input></div>
      <div><input placeholder="website 4" type='text' onChange={(e) => localStorage.setItem('website-4',JSON.stringify(e.target.value))}></input></div>
      <div><input placeholder="timer" type='number' onChange={(e) => localStorage.setItem('timer',JSON.stringify(e.target.value))}></input></div>
      <div className="cursor-pointer" onClick={() => {navigate('/slideshow')}}>Slideshow</div>
    </div>
  </div></div>
  )
}

export default Home