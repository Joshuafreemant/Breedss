
import './Create.css'

// import HeaderSec from '../Header_sec/Header_sec'
import Button from '../Button2/Button'
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
export default function Create() {
    return (
        <div>
         <ScrollToTopOnMount />
           <section className="create__post section">
           {/* <HeaderSec/> */}


           <div className="create__post-container container">
<form action="" method="post">
    <div className="create__post-textarea">
        <textarea placeholder="Write Something....." required name="" id="" cols="30" rows="10"></textarea>
    </div>

    <div className="create__post-textarea">
    <input type="file" name="" id="" required/>
    </div>

    <div className="create__post-visibility">
    <h5>Set Post Visibility</h5>
    <select>
        <option>Public</option>
        <option>Friends Only</option>
        <option>Private</option>


    </select>
    </div>



    <Button text="Create Post"/>
</form>
           </div>
           </section>
        </div>
    )
}
