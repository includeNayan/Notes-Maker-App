import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Notes from "./components/Notes"
import ViewNotes from "./components/ViewNotes"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/notes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Notes/>
    </div>
    },
    {
      path:"/notes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewNotes/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
