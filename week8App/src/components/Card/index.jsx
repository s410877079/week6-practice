import PostalStamp from "../Postalstamp"
import Stamp from "../Stamp"
import "./index.css"
import "./wish.css"
import Photo from "../week9/App-customCard"

export default function Card({ user, style}) {
    const { name, grade, imgSrc, wish, imgSrc2 } = user
    return (
        <div className="card" style={style}>
            <div className="card-content">
                <div class="background"></div>
                <StampSection name={name} grade={grade} imgSrc={imgSrc} />
                <Wish wish={wish} />
                <PhotoUpload photo={imgSrc2} />
            </div >
        </div>
    )
}

function StampSection({ name, grade, imgSrc }) {
    return (
        <div className="stamp-section">
            <div className="sender-info">
                <div className="sender">
                    <div className="sender-text">Sender:</div>
                </div>
                <div className="sender-name">
                    <div className="sender-name-text">{name}</div>
                </div>
                <div className="sender-grade">
                    <div className="sender-grade-text">{grade}</div>
                </div>
            </div>
            <div className="stamp-holder">
                <Stamp imgSrc={imgSrc} />
                <PostalStamp/>
            </div>
        </div>

    )
}


function Wish({ wish }) {
    return (
        <div className="wish">
            <div className="right-quotation">”</div>
            <div className="left-quotation">“</div>
            <div className="wish-text">{wish}</div>
        </div>
    )
}

function PhotoUpload({ imgSrc2 }) {
    return (
        <div className="photo-upload">
            <img className="photo" src={imgSrc2} />
            {/* <Photo src={imgSrc2} /> */}
        </div>
    )
}