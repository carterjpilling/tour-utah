import NavBar from './Components/NavBar'
import Carousel from './Components/Carousel/Carousel'
import OurParks from './Components/ParksFolder/OurParks'
import UtahFacts from './Components/UtahFacts'
import Featured from './Components/Featured'
import Swiper from './Components/Featured/Swiper'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <OurParks />
      <UtahFacts />
      <Featured />
      <Swiper />

    </div>
  );
}

export default App;
