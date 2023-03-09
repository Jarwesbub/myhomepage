import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import FrontPage from './pages/front_page';
import AboutMe from './pages/aboutme_page';
import ReDbg from './pages/re_dbg_page';
import UglyUnicorn from './pages/uglyunicorn_page';
import RacingGame from './pages/racing_game_page';
import Doggo from './pages/doggoinspace_page';
import TamRam from './pages/tamram_page';

const URL = "/myhomepage";

function App() {

  return (
    <div className="App">
      <Container className="App-container" fluid>
        <NavBar />
        <Routes>
          <Route className="page-routes">
            <Route path={"/"} element={<FrontPage />} />
            <Route path={URL+"/aboutme"} element={<AboutMe />} />
            <Route path={"#/residentevildbg"} element={<ReDbg />} />
            <Route path={"#/uglyunicorn"} element={<UglyUnicorn />} />
            <Route path={"#/racinggame"} element={<RacingGame />} />
            <Route path={"#/doggoinspace"} element={<Doggo />} />
            <Route path={"#/tamram"} element={<TamRam />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
