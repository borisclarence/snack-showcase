import Homes from './pages/homes/Homes';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Business from './pages/business/Business';
import Bestsellers from './pages/bestsellers/Bestsellers';
import Footers from './pages/footers/Footers';
import Contact from './pages/contact/Contact';
import './assets/css/App.css';




function App() {
  return (
    <div className="app">
      <Homes />
      <About />
      <Service />
      <Business />
      <Bestsellers />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
