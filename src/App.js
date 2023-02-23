
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter ,Switch,Route,Routes,Link} from "react-router-dom";
import { redirect } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Email from "./components/Pages/Analytics";
//import Login from "./components/Pages/Login"
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage'
import Admin from "./components/Layouts/Admin";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Top from "./components/Layouts/TopNavbar";
import Email1 from './components/Pages/Email';
import Call from './components/Pages/Call';
import Social from "./components/Pages/Social";
import Sms from './components/Pages/Sms Campaign';
import Marketing from './components/Pages/Email Marketing';


export  const UserContext=createContext();

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }


  return (
    <div className="Main">
      <UserContext.Provider value={{ theme: theme, color: switchTheme }}>
       <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<MainPage/>}/>
            

           
          </Routes>
        </BrowserRouter> 
        
     

        {/* <MainPage/>  */}
      
        </UserContext.Provider>
    </div>
  );
}

export default App;
