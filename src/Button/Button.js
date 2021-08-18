
import './Button.css'
export default function Button(props) {
    return (
        <div>
            
            <button className="form-button">{props.text}</button>
        </div>
    )
}
