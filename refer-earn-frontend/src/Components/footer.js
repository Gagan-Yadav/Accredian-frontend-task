import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div className='fbody'>
        <h1>Made  By Gagan </h1>
        {/* <Link className='hlinks' target='_blank' to="https://gagan-yadav.github.io/">Gagan Portfolio</Link> */}
        <a href='https://gagan-yadav.github.io' target='_blank'>Gagan</a>
        <p className='fp'> All Rights Reserved by gagan</p>
    </div>
  )
}
