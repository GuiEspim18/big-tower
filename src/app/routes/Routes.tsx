import { BrowserRouter, Navigate, Routes as Switch, Route } from 'react-router-dom'
import Home from '../pages/home/Home'

function Routes(): any {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='*' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<Home/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes