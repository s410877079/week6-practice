import "./index.css"
import postalStamp from "./stamps"

export default function PostalStamp() {
    
    // switch(varient){
    //     case 0:
    // }

    return (
        <div className="seal">
            <img className="seal-icon" src={postalStamp[1]}/>
        </div>
    )
}
