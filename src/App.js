import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import AccountPage from "./pages/AccountPage";
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/dashboard'>
          <DashboardPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
        <Route path='/history'>
          <HistoryPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
