import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import GiftCardDetailPage from "./pages/GiftCardDetailPage/GiftCardDetailPage"
import HomePage from "./pages/HomePage/HomePage"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-card/:id" element={<GiftCardDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
