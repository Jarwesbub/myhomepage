import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/navbar';
import Footer from './components/footer';
import FrontPage from './pages/front_page';
import AboutMe from './pages/aboutme_page';
import ReDbg from './pages/re_dbg_page';
import UglyUnicorn from './pages/uglyunicorn_page';
import RacingGame from './pages/racing_game_page';
import Doggo from './pages/doggoinspace_page';
import TamRam from './pages/tamram_page';
import Softaustalo from './pages/softaustalo_page';

const mashUpSlider = { width: 600, height: 600 }; // Front page
const imageSlider = { width: 960, height: 540 }; // Initial pages

function App() {
  return (
    <div className="App">
      <Container className="App-container" fluid>
        <NavBar />
        <Routes>
          <Route className="page-routes">
            <Route path={"/"} element={<FrontPage imageSlider={mashUpSlider} />} />
            <Route path={"/aboutme"} element={<AboutMe />} />
            <Route path={"/residentevildbg"} element={<ReDbg imageSlider={imageSlider} />} />
            <Route path={"/uglyunicorn"} element={<UglyUnicorn imageSlider={imageSlider} />} />
            <Route path={"/racinggame"} element={<RacingGame imageSlider={imageSlider} />} />
            <Route path={"/doggoinspace"} element={<Doggo imageSlider={imageSlider} />} />
            <Route path={"/tamram"} element={<TamRam imageSlider={imageSlider} />} />
            <Route path={"/xiii-softaustalo"} element={<Softaustalo imageSlider={imageSlider} />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
