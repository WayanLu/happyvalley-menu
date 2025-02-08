import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateNavbar from "./components/navbar/navbar";
import CreateMenu from "./pages/Menu";

function App() {
  return (
    <>
      <CreateNavbar />
      <CreateMenu />
    </>
  );
}

export default App;
