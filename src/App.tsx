import './App.css'
import ManageSubscription from './pages/Subscription/ManageSubscription'
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route index element={<ManageSubscription/>} />
        <Route element={<ManageSubscription/>} path="manage-subscription" />
      </Routes>
      </BrowserRouter>
  )
}

export default App
