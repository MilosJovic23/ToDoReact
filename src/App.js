import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";


function App() {
  return (
      <>

        <BrowserRouter>
          <Routes>
           <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>


      </>

  );
}

export default App;
