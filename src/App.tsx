import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/components/Home";
import {Statistics} from "./pages/statistics/Statistics";
import {Header} from "./pages/shared/Header/Header";
import {Popup} from "./pages/shared/Popup/Popup";

function App() {
  return (
    <div className="global_container">
        {/*<Popup />*/}
        <div className="container">

          <Header />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/statistics" element={<Statistics />}/>
          </Routes>
        </div>
    </div>
  );
}
export default App;
