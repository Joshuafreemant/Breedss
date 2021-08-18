
import './Edit_profile.css'
import Picture from '../images/user-plus.png';
import { NavLink } from 'react-router-dom';
import Button from '../Button2/Button'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const animatedComponents = makeAnimated();
const colourOptions = [
    { value: 'All Pets', label: 'All Pets' },
    { value: 'Dogs', label: 'Dogs' },
    { value: 'Bunnies', label: 'Bunnies' },
    { value: 'Cats', label: 'Cats' },
    
    { value: 'Birds', label: 'Birds' },
    { value: 'Others', label: 'Others' }
]

export default function Profile() {
    return (
        <div>
         <ScrollToTopOnMount />

            <section className="section edit-profile__section">
                <div className="edit-profile__container container">
                    <div className="edit-profile__image prof">

                        <img src={Picture} alt="" />
                        <p className="add-image">Add Image</p>
                        <form action="" method="post" className="edit-profile__image-form">
                            <input type="file" name="" id="" className="edit-profile__image-input" />
                            {/* <button>Done</button> */}
                        </form>



                    </div>

                    <div className="edit-profile__info">
                        <h2>Edit Profile Info</h2>
                        <p>Fullname: Joshua Freeman</p>
                        <p>Username: @Joshfreeman73</p>

                        <div className="change__edit-profile">
                            <NavLink exact to="/view_profile" className="edit_profile__link">
                                View Profile
                            </NavLink>
&nbsp; &nbsp;
                            <NavLink exact to="/edit_password" className="edit_profile__link">
                                Modify Password
                            </NavLink>
                        </div>


                    </div>
                </div>
            </section>

            <section className="section edit__profile-section">
                <div className="container edit__profile-container">
                    <form action="">
                    <p>Personal Information</p>
                        <div className="edit-profile-form-group">
                            <label htmlFor="Fullname">Fullname</label>
                            <input type="text" className="edit-profile-form-input" Value="Joshua Freeman" />
                        </div>

                        
                        <div className="edit-profile-form-group">
                            <label htmlFor="Email Address">Email Address</label>
                            <input type="email" className="edit-profile-form-input" Value="Joshuafeemant@gmail.com" />
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="edit-profile-form-input" Value="@Joshfreeman73"/>
                        </div>

                        <Select
                     placeholder={'Select Interests.....'}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={colourOptions[0]}
                            
                            isMulti
                            options={colourOptions}
                            disabled={true}
                           
                        />

                        <Button text="Make Changes"/>

                      

                    </form>
                </div>

            </section>
        </div>
    )
}
