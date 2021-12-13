import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Explore from '../explore/Explore'
import Ticketing from '../ticketing/Ticketing'
import Monitoring from '../monitoring/Monitoring'
import Checklist from '../checklist/Checklist'
import Inventory from '../inventory/Inventory'
import Setting from '../setting/Setting'

const Routing = () => {
    return (
        <section>
            <div className='px-4 py-2'>
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/explore' component={Explore} />
                    <Route exact path='/ticketing' component={Ticketing} />
                    <Route exact path='/monitoring' component={Monitoring} />
                    <Route exact path='/checklist' component={Checklist} />
                    <Route exact path='/inventory' component={Inventory} />
                    <Route exact path='/setting' component={Setting} />
                </Switch>
            </div>
        </section>
    )
}

export default Routing