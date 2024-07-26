import './App.css';
import Banner from './components/Banner';
// import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated"/>
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies"/>
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy"/>
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentary"/>
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror"/>
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance"/>
    </div>
  );
}

export default App;
