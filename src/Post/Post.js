import React from 'react'
import Social from '../Social/Social'
import Pets from '../images/Pets.jpg';
import Petgs from '../images/Petgs.jpg';
import './Post.css'
import HeaderSec from '../Header_sec/Header_sec'

import Petv from '../images/Pet.mp4';
export default function post() {
    return (
        <div >
          <HeaderSec/>
         
            <section className="section post__section-parent">
                <Social media={Petv} />
                <Social media={Pets} />
                <Social media={Petgs} />
            </section>

        </div>
    )
}
