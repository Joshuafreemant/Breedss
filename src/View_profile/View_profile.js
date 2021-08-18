
import './View_profile.css'
import Picture from '../images/user-plus.png';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

// import Button from '../Button2/Button'
// import Header_sec from '../Header_sec/Header_sec'
const animatedComponents = makeAnimated();
const petOptions = [
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
       
            <section className="section profile__section">
                <div className="profile__container container">
                    <div className="profile__image prof">

                        <img src={Picture} alt="" />
                        <p className="add-image">Add Image</p>
                        <form action="" method="post" className="profile__image-form">
                            <input type="file" name="" id="" className="profile__image-input" />
                            {/* <button>Done</button> */}
                        </form>



                    </div>

                    <div className="profile__info">
                        <h2>View Profile Info</h2>
                        <p>Fullname: Joshua Freeman</p>
                        <p>Username: @Joshfreeman73</p>

                        <div className="change__profile">
                            <NavLink exact to="/edit_profile" className="profile__link">
                            Edit Profile
                            </NavLink>
&nbsp; &nbsp;
                            <NavLink exact to="/edit_password" className="profile__link">
                                Modify Password
                            </NavLink>
                        </div>


                    </div>
                </div>
            </section>

            <section className="section view__profile-section">
                <div className="container view__profile-container">
                    <form action="">
                    <p>Personal Information</p>
                        <div className="profile-form-group">
                            <label htmlFor="Fullname">Fullname</label>
                            <input type="text" className="profile-form-input" Value="Joshua Freeman" disabled/>
                        </div>

                        
                        <div className="profile-form-group">
                            <label htmlFor="Email Address">Email Address</label>
                            <input type="email" className="profile-form-input" Value="Joshuafeemant@gmail.com" disabled/>
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="profile-form-input" Value="@Joshfreeman73" disabled/>
                        </div>

                        <div className="profile-form-group">
                        <Select
                     placeholder={'Select Interests.....'}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={petOptions[0]}
                            
                            isMulti
                            options={petOptions}
                            disabled={true}
                           
                        />
                        </div>

                        

                        

                        <NavLink exact to="/edit_profile" className="edit-profile__link">
                        Edit Profile
                            </NavLink>

                    </form>
                </div>

            </section>
        </div>
    )
}
