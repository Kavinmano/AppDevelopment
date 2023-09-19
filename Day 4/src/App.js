import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';  
import { selectUser } from './Redux/userSlice';



function App() {
  const user = useSelector(selectUser);
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Login/>}/>
      <Route exact path='/SignUp' element = {<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    <div className="App">
            
         </div>
    </>
  );
}

export default App;
