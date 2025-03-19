import { Routes, Route} from 'react-router-dom'
import {Index} from './index/Index.jsx'

export function Router() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Index/>}/>
            </Routes>
        </>
    )
}