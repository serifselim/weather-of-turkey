import React from 'react'
import github from '../../../assets/github.svg'

const Logo = () => {
  return (
    <div>
      <a href="https://github.com/serifselim">
        <img src={github} alt="github" />
      </a>
      <strong className="ms-3 fs-5">Weather of Turkey</strong>
    </div>
  )
}

export default Logo
