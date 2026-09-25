import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThisIsMe from './pages/ThisIsMe'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/thisisme"
                element={
                    <div className="min-h-screen py-12 px-4">
                        <div className="max-w-hub mx-auto">
                            <ThisIsMe />
                        </div>
                    </div>
                }
            />
        </Routes>
    )
}

export default App
