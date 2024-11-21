import { BrowserRouter as Routers,Routes,Route } from "react-router-dom"
import Create from "./pages/Create"
import View from "./pages/View"
import 'bootstrap/dist/css/bootstrap.css'
import Update from "./pages/Update"

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Create/>}></Route>
          <Route path="/view" element={<View/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
      </Routers>
    </>
  )
}

export default App
