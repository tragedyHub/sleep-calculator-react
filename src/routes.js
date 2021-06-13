import {Switch, Route} from 'react-router-dom'
import {Home} from "./Components/Home/Home"
import {SleepNotNow} from "./Components/SleepNotNow/SleepNotNow"

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/not_now" exact>
                <SleepNotNow />
            </Route>
        </Switch>
    )
}