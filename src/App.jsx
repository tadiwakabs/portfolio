import {HashRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {NotFound} from "./pages/notfound.jsx";
import {Toaster} from "@/components/ui/toaster.jsx";

function App() {

  return (
    <>
        <Toaster />
        <HashRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </HashRouter>

    </>
  )
}

export default App
