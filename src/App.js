import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <><div>
      <BrowserRouter>
      <Routes>
        <Route path="/hellow-world">
          <h1> This is Hellow World Page.... </h1>
        </Route>
        </Routes>
      </BrowserRouter>
      <h1> This is Normal Home Page </h1>
    </div></>
  );
}

export default App;
