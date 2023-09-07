import React from 'react'
import './Footer.css'
import github from '../images/github.png'

const Footer = ({className}) => {
  return (

    <div  className={"footer "+className}>
<p>&copy; 2023 Bhakthi Sharma</p>
<p>Built on top of React</p>
<p>Data provided by TMDb</p>
<a href="https://github.com/bhakthisharma/movieflux">
  <img src={github} alt="github-icon" width={25} height={25} /></a>
      </div>
  )
}

export default Footer