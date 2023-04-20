import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <Banner fetchUrl={requests.fetchTopRated}></Banner>

      <Row isLargeRow={true} title="Trending " fetchUrl={requests.fetchTrending}></Row>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action " fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy " fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror " fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romantic " fetchUrl={requests. fetchRomanceMovies}></Row>
      <Row title="Documenteraries" fetchUrl={requests. fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
