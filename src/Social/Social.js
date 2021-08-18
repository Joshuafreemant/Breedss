
import './Social.css'
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from "react-icons/fi";
import React, { useState } from 'react';




export default function Social(props) {
    const media = props.media;
    const splitMedia = media.split('.').pop();
    const ext = splitMedia.split('.').pop();

    const [show, setShow] = useState(false);
    const [like, unLike] = useState(false);

    function showMore() {
        setShow((show)=>!show)
      
    }
    function likes() {
        unLike((like)=>!like)
      
    }

    return (
        <div>
          
            
            <section className="post section">

                <div className="post__container container">
                    <div className="post__header">
                        <div className="post__user">
                            <div className="user__picture">

                            </div>
                            <h4>Joshua Freeman</h4>
                        </div>
                        <div className="post__option">
                            <button>...</button>
                        </div>
                    </div>
                    <div className="post__content">

                    </div>
                    <div className="post__content">
                        <p className="post__time">1 Hour Ago</p>
                        <p className="post__description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, voluptas commodi.
                            Corrupti, vel nesciunt excepturi rerum delectus maxime! Numquam, exercitationem!
                        </p>


                        {ext === 'mp4' ? <video controls className="post__image">
                            <source src={media} type="video/mp4" />
                        </video> : <img src={media} alt="" className="post__image" />}






                    </div>

                    <div className="post__actions">
                        <div className="post__comments">
                            <h5>John.dane: </h5>&nbsp;<p className=  {show ? '' : 'post__comments-p'}> I Love this mhenn</p>
                        </div>

                        <div className="post__comments">
                      
                            <h5>Dane.kate: </h5>&nbsp;<p className=  {show ? '' : 'post__comments-p'}> This cat is super cool and I Love this mhenn</p>
                            <button className={show ? 'hide__more' : 'show__more'} onClick={showMore}>More</button>
                        </div>

                        <p className="all__comment">View all 4,210 comments</p>
                        <div className="post__action-like">
                            <div className="post__action-left"  onClick={likes}>

                            {like ? <FaHeart/> : <FiHeart/>}
                              
                                

                            </div>
                            <div className="post__action-right">
                                <input type="text" className="form-input" placeholder="Add a Comment" />
                                <button>Post</button>
                            </div>
                        </div>



                    </div>
                </div>

            </section>
        </div>
    )
}
