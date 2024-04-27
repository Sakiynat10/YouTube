import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import VideoPage from "./pages/video"
import Layout from "./components/layout/layout/layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="video/details/:videoId" element={<VideoPage/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
