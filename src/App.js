import './App.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Tables from './components/Tables'
import Faq from './components/Faq'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Features />
      <Pricing />
      <Tables />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
