import './styles/App.css'
import Row from './components/Row'
import requests from './scripts/request'

function App() {

    return (
        <>
            <h1>My Netflix Clone.</h1>
            <Row title={"Seulement sur Netflix"} fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title={"Tendance en ce moment"} fetchURL={requests.fetchTrending}/>
            <Row title={"Films salués par la critique"} fetchURL={requests.fetchTopRated}/>
            <Row title={"Films d'action"} fetchURL={requests.fetchActionMovies}/>
            <Row title={"Comédie"} fetchURL={requests.fetchComedyMovies}/>
            <Row title={"Films d'horreur"} fetchURL={requests.fetchHorrorMovies}/>
            <Row title={"Romance"} fetchURL={requests.fetchRomanceMovies}/>
            <Row title={"Documentaires"} fetchURL={requests.fetchDocumentaries}/>
        </>
    )
}

export default App
