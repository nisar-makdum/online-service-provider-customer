import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import DaySub from './Components/BookingPage/DaySub/DaySub';
import MonthlySub from './Components/BookingPage/MonthlySub/MonthlySub';
import WeeklySub from './Components/BookingPage/WeeklySub/WeeklySub';
import Confirmation from './Components/Confirmation/Confirmation';
import Home from './Components/Homepage/Home/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/LoginPage/privateRoute';
import Schedule from './Components/Schedule/Schedule';
import Commercial from './Components/ServicePages/Commercial/Commercial';
import Household from './Components/ServicePages/Household/Household';
import Office from './Components/ServicePages/Office/Office';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path='/home'>
            <Home />
          </PrivateRoute>
          <PrivateRoute path='/office'>
            <Office />
          </PrivateRoute>
          <PrivateRoute path='/household'>
            <Household />
          </PrivateRoute>
          <PrivateRoute path='/commercial'>
            <Commercial />
          </PrivateRoute>
          <PrivateRoute path='/schedule'>
            <Schedule />
          </PrivateRoute>
          <PrivateRoute path='/daySub'>
            <DaySub />
          </PrivateRoute>
          <PrivateRoute path='/weeklySub'>
            <WeeklySub />
          </PrivateRoute>
          <PrivateRoute path='/monthlySub'>
            <MonthlySub />
          </PrivateRoute>
          <PrivateRoute path='/Confirmation'>
            <Confirmation />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
