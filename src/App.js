import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 영화 상세 */}
        <Route path="/movie/:id" element={<Detail />}></Route>
        {/* 홈 경로 */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
