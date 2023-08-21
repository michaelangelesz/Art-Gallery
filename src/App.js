import { useState, useEffect } from "react" // import useState and useEffect hooks from react
import "./App.css"
import Gallery from "./Components/Gallery"
import ButtonBar from "./Components/ButtonBar"

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    // console.log("render last")
    document.title = "Mike's ArtWorld"
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resdata) => setData(resdata))
  }, [artId])
  // console.log("render first")

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  const displayImage = () => {
    if (!data.primaryImage) {
      return <h2>No Image!</h2>
    }
    return (
      <Gallery
        objectImg={data.primaryImage}
        title={data.title}
        artist={data.artistDisplayName}
        medium={data.medium}
        date={data.objectDate}
      />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{ width: "100%" }}>{displayImage()}</div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  )
}

export default App
