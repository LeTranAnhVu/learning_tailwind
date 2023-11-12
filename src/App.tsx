import {Link, Route, Routes} from 'react-router-dom'
import Day1 from './components/Day1.tsx'

function Header() {
    return (
        <nav className="flex gap-4">
            <Link to="/day1">Day 1</Link>
            <Link to="/day2">Day 2</Link>
        </nav>
    )
}

function App() {

  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/day1" element={<Day1/>} ></Route>
          </Routes>
      </div>
  )
}

export default App
