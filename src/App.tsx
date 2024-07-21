import './App.css'
import Row from './components/Row'
import requests from './scripts/request'

function App() {


  return (
    <>
      <h1>My Netflix Clone.</h1>
      <Row title={"NETFLIX ORIGINALS"} fetchURL={requests.fetchNetflixOriginals}/>
      <Row title={"Trending Now"} fetchURL={requests.fetchTrending}/>
    </>
  )
}

export default App
