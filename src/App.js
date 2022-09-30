import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
import Details from "./components/Details";
import Header from './components/Header';
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false)


  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`App ${darkMode && 'dark'}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <main className="min-h-[90vh] pt-[70px] ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path=":country_common_name" element={<Details/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
