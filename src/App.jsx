import "./App.css";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Tasks />
      </div>
    </>
  );
}

export default App;
