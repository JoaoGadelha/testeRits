import './App.css';
import HeaderCarousel from './Components/HeaderCarousel/HeaderCarousel'
import HeaderMenu from './Components/HeaderMenu/HeaderMenu'
import Categories from './Components/Categories/Categories'
import Video from './Components/Video/Video'
import AboutCarousel from './Components/AboutCarousel/AboutCarousel'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <HeaderCarousel />
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
