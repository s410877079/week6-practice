import Image from "mui-image"
import "./index.css"
import Seal from "./Seal"

export default function PostedStamp({ imgSrc, sealVariant, sealLocation }) {

  sealVariant = sealVariant ? sealVariant : 0
  sealLocation = sealLocation ? sealLocation : { left: "-20px", bottom: "-30px", transform: "rotate(-45deg)" }

  return (
    <div className="stamp-holder">
      <Stamp imgSrc={imgSrc} />
      <Seal variant={sealVariant} location={sealLocation} />
    </div>
  )

  function Stamp({ imgSrc }) {
    return (
      <div className="stamp">
        <Image
          duration={0}
          src={imgSrc}
        />

      </div>

    )
  }

}
