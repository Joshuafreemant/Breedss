
import './Header_sec.css'
import { FaSearch,FaUserCog,FaTimesCircle } from 'react-icons/fa';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


const animatedComponents = makeAnimated();
const colourOptions = [
    { value: 'All Pets', label: 'All Pets' },
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Bunnies', label: 'Bunnies' },
    { value: 'Cats', label: 'Cats' },
    
    { value: 'Birds', label: 'Birds' },
    { value: 'Others', label: 'Others' }
]

export default function HeaderSec() {
    const [showInput, setShowInput] = useState(false);
   

    function showSearch() {
        setShowInput((showInput)=>!showInput)
      
    }
    


    return (
        <div>
            <section className="post__nav-header section">
                <div className="post__nav container">
                    <div className="post__nav-profile">
                        <NavLink exact to="/profile" className="user__link dropdown__profile">
                         
                        <span>Profile</span>  <FaUserCog/>
                          
                          
                        </NavLink>
                        <NavLink exact to="/profile" className="user__link">
                            All Post
                        </NavLink>
                        <NavLink exact to="/create_post" className="user__link">
                            Create Post
                        </NavLink>

                      <div className= 'header__search'>
                      <button className={showInput ? 'hide__search' : 'show__search'} onClick={showSearch}> <FaSearch/></button>
                      <button className={showInput ? 'show__search' : 'hide__search'} onClick={showSearch}> <FaTimesCircle/></button>
                     
                      </div>
                    </div>
                    <div className={showInput ? 'post__nav-interest-hide' : 'post__nav-interest'}>
                    <form action="">
                    <Select
                     placeholder={'Select Interests.....'}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                           
                            
                            isMulti
                            options={colourOptions}
                        />
                       <button>Submit</button>
                    </form>
                       
                    </div>
                   


                    <div className={showInput ? 'show__search' : 'hide__search'}>
                    <form action="" method="post">
                   <input type="text" name="" id="searchP" autoFocus placeholder="Search Pet Users"/>
                       <button> Submit</button>
                    </form>
                       
                    </div>

                </div>
                
            </section>
        </div>
    )
}
