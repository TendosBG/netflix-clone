import './styles/App.css'
import Row from './components/Row'
import requests from './scripts/request'
import Banner from "./components/Banner.tsx";
import Nav from "./components/Nav.tsx";

function App() {

    return (
        <>
            <Nav />
            <Banner />
            <Row title={"Seulement sur Netflix"} fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title={"Tendance en ce moment"} fetchURL={requests.fetchTrending}/>
            <Row title={"Films salués par la critique"} fetchURL={requests.fetchTopRated}/>
            <Row title={"Films d'action"} fetchURL={requests.fetchActionMovies}/>
            <Row title={"Comédie"} fetchURL={requests.fetchComedyMovies}/>
            <Row title={"Horreur"} fetchURL={requests.fetchHorrorMovies}/>
            <Row title={"Romance"} fetchURL={requests.fetchRomanceMovies}/>
            <Row title={"Documentaires"} fetchURL={requests.fetchDocumentaries}/>
        </>
    )
}

export default App
