import React from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from '../Layout/Footer'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default AppRouter
