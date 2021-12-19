import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Explore from '../explore/Explore'
import Report from '../report/Report'
import Ticket from '../ticket/Ticket'
import Monitoring from '../monitoring/Monitoring'
import Checklist from '../checklist/Checklist'
import Inventory from '../inventory/Inventory'
import Setting from '../setting/Setting'

const Routing = () => {
    return (
        <section>
            <div className='px-4 py-2 h-auto w-full'>
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/explore' component={Explore} />
                    <Route exact path='/ticket' component={Ticket} />
                    <Route exact path='/ticket/:id' component={Ticket} />
                    <Route exact path='/ticket/history/:id' component={Ticket} />
                    <Route exact path='/report' component={Report} />
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