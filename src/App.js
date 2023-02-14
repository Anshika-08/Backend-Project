import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./components/Home"
import Add from "./components/Add"
import AddBooking from "./components/AddBooking"
import ViewBookings from "./components/ViewBookings"
import SuperView from './components/SuperView';

function App() {
  
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<Add/>}/>
        <Route exact path="/addBooking" element={<AddBooking/>}/>
        <Route exact path="/view" element={<ViewBookings/>}/>
        <Route exact path="/superView" element={<SuperView/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;


