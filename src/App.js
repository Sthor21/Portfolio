import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Project from "./Components/Project/Project"
import Skills from "./Components/Skills/Skills"
import Socials from './Components/Socials/Socials';
import { useRef } from 'react';

function App() {
    const ski=useRef(null)
    const skil=useRef(null)
    const cont=useRef(null)
    const scroll = () => {
        ski.current.scrollIntoView({ behavior: "smooth",
          block: "start", 
          inline: "nearest"
         });
      };
    const scroll1 = () => {
      skil.current.scrollIntoView({ behavior: "smooth",
        block: "start", 
        inline: "nearest"
       });
    };
    const scroll2 = () => {
      cont.current.scrollIntoView({ behavior: "smooth",
        block: "start", 
        inline: "nearest"
       });
    };
return (
    <div className="App">
      <Navbar click_proj={scroll} click_skill={scroll1} click_cont={scroll2}/>
      <Hero click_proj={scroll} click_skill={scroll1} />
      <Skills section={skil}/>
      <Project section={ski}/>
      <Socials section={cont}/>
      
    </div>
  );
}

export default App;
