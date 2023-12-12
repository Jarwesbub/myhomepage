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
import SuperBubble from './pages/super_bubble_page';

const widthLimit = 1000
const imageSliderSize = { width: 960, height: 540 }; // Initial pages

function App() {
  return (
    <div className="App">
      <Container className="App-container" fluid>
        <NavBar widthLimit={widthLimit}/>
        <Routes>
          <Route className="page-routes">
            <Route path={"/"} element={<FrontPage widthLimit={widthLimit} />} />
            <Route path={"/aboutme"} element={<AboutMe />} />
            <Route path={"/residentevildbg"} element={<ReDbg imageSlider={imageSliderSize} />} />
            <Route path={"/uglyunicorn"} element={<UglyUnicorn imageSlider={imageSliderSize} />} />
            <Route path={"/racinggame"} element={<RacingGame imageSlider={imageSliderSize} />} />
            <Route path={"/doggoinspace"} element={<Doggo imageSlider={imageSliderSize} />} />
            <Route path={"/tamram"} element={<TamRam imageSlider={imageSliderSize} />} />
            <Route path={"/xiii-softaustalo"} element={<Softaustalo imageSlider={imageSliderSize} />} />
            <Route path={"/superbubble"} element={<SuperBubble imageSlider={imageSliderSize} />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
