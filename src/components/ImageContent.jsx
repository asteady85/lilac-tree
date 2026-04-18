import "./ImageContent.css"

const ImageContent = ({ children, id, image, reverse = false }) => {
  return (
    <div id={id} className="padded top bottom">
      <div className={`image-content${reverse ? ' reverse' : ''}`}>
        <div className="image-content-image" style={{ backgroundImage: `url(${image})` }} />
        <div className="image-content-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ImageContent;