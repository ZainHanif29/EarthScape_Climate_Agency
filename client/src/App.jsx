import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen items-center justify-center text-center">
        <h1 className="animate-bounce text-5xl text-blue-800 font-bold">
          React App
        </h1>
        <Button>Submit</Button>
      </div>
    </>
  );
}

export default App;
