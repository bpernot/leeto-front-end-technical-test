import React, { Suspense, lazy } from "react"
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"

const GiftCardDetailPage: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import("./pages/GiftCardDetailPage/GiftCardDetailPage"))
const HomePage: React.LazyExoticComponent<React.FC<{}>> = lazy(() => import("./pages/HomePage/HomePage"))

const MainLayout = (): JSX.Element => <Outlet />

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="gift-card/:id" element={<GiftCardDetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
