import { Routes, Route} from 'react-router-dom'
import {Index} from './index/index.jsx'

export function Router() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Index/>}/>
            </Routes>
        </>
    )
}