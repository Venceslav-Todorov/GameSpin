import { BrowserRouter, Outlet } from "react-router-dom";
import TheRouter from "./TheRouter";
import TheHeader from "./views/components/TheHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <TheHeader />
        <TheRouter>
          <Outlet />
        </TheRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
