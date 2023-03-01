import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Ui from "./page/UI";
import { HuhProvider } from "./context/context";
function App() {
  return (
    <HuhProvider>
      <>
        <Routes>
          <Route path={"/"} element={<Home />}>
            Home
          </Route>
          <Route path={"/Ui"} element={<Ui />}>
            View
          </Route>
        </Routes>
      </>
    </HuhProvider>
  );
}
export default App;
