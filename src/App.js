import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from './Components/Carousel/BootstrapCarousel'
import HeaderMenu from './Components/HeaderMenu/HeaderMenu'
import Categories from './Components/Categories/Categories'
import Video from './Components/Video/Video'
import AboutCarousel from './Components/AboutCarousel/AboutCarousel'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BootstrapCarousel />
      <HeaderMenu />
      <Categories />
      <Video />
      <AboutCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
