import Home from "./pages/home";
import background from "./images/background.jpg"
function App() {
  return (
    <div className="bg w-full h-full p-0 m-0 relative" >
        <img className="absolute w-full h-full -z-10 opacity-75 " src={background} alt="no img"/>
        <Home/>
      </div>
  );
}


export default App;
