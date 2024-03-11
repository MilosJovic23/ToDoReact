import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function App() {
    return (
      <>

        <BrowserRouter>
          <Routes>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/logout" element={<Logout/>}></Route>
          </Routes>
        </BrowserRouter>


      </>

  );
}

export default App;
