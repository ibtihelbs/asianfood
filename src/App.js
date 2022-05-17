import './App.css';
import Header from './componants/Header.js';
import About from './componants/About.js';
import Menu from './componants/Menu.js';
import Contact from './componants/Contact.js';
import Footer from './componants/Footer.js';
function App() {
  return (
    <div className="App">
     <Header/>
     <About/>  
     <Menu/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
