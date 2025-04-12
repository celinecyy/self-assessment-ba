import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/DesignTokens.css";
import Start from "./pages/Start";
import Fragebogen from "./pages/Fragebogen";
import Ergebnisse from "./pages/Ergebnisse";
import { AnswerProvider } from "./components/AnswerContext";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <main className="flex justify-center lg:pl-20 w-full BgCircle">
          <AnswerProvider>
            <Routes>
              <Route index element={<Start />} />
              <Route path="/Fragebogen" element={<Fragebogen />} />
              <Route path="/Ergebnisse" element={<Ergebnisse/>} />
            </Routes>

          </AnswerProvider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
