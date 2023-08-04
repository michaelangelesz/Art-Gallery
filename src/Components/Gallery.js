function Gallery(props) {
  return (
    <div style={{ width: "100%" }}>
        <p>Artist: {props.artist}</p>
        <p>{props.medium}, {props.date}.</p>
      <img
        style={{ maxWidth: "80vw", maxHeight: "60vh" }}
        src={props.objectImg}
        alt={props.title}
        />
    </div>
  )
}

export default Gallery
