import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { DefaultLayout } from './layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article/:issueId" element={<Article />} />
      </Route>
    </Routes>
  )
}
