import './Profile.css'
import Pet_img from '../images/post-pet.jpg';
import Social from '../Social/Social'
import Pets from '../images/Pets.jpg';
import Petgs from '../images/Petgs.jpg';
import Petv from '../images/Pet.mp4';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
export default function Profile() {
    return (
        <div>
         <ScrollToTopOnMount />

            <section className="profile__page-sectionn section">
                <div className="container profile__page-container">
                    <div className="profile__page-grid">
                        <div className="profile__grid-image">
                            <img src={Pet_img} alt="" />
                        </div>

                        <div className="profile__grid-info">
                            <div className="user__follow">
                                <h2>Joshua Freeman</h2>
                                <span>Dogs, Cats, Bunnies Lover</span>
                                <br/>
                                <br/>
                                <NavLink exact to="/view_profile" className="view__profile-button">
                                View Profile
                                </NavLink>
                                
                            </div>

                            <div className="post__info">
                                <h1>180</h1>
                                <p>Posts</p>
                            </div>

                            <div className="post__info">
                                <h1>53</h1>
                                <p>Followers</p>
                            </div>


                            <div className="post__info">
                                <h1>121</h1>
                                <p>Following</p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="section post__section-parent">
                <Social media={Petv} />
                <Social media={Pets} />
                <Social media={Petgs} />
            </section>
        </div>
    )
}
