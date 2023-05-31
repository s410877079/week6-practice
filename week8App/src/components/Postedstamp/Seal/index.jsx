import "./index.css"
import seals from "./seals"

export default function Seal({ variant, location }) {

    variant = variant ? variant : 0

    console.log('seal variant')
    console.log(seals)
    console.log(location)


    return (

        <div className="seal" style={location}>
            <img className="seal-icon" src={seals[variant].src} style={seals[variant].style} />
        </div>

    )
}