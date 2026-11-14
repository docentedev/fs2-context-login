import "./App.css";
import { Redirect, Route, Router, Switch } from "wouter";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import OverviewPage from "./pages/dashboard/OverviewPage";
import SalesPage from "./pages/dashboard/SalesPage";
import CustomersPage from "./pages/dashboard/CustomersPage";
import SettingsPage from "./pages/dashboard/SettingsPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* / -> formulario de login */}
        <Route path="/" component={LoginPage} />

        {/* /dashboard -> layout con menú lateral y superior + secciones anidadas */}
        <Route path="/dashboard" nest>
          <DashboardPage>
            <Route path="/" component={OverviewPage} />
            <Route path="/ventas" component={SalesPage} />
            <Route path="/clientes" component={CustomersPage} />
            <Route path="/ajustes" component={SettingsPage} />
            {/* Cualquier otra ruta dentro de /dashboard vuelve al panel */}
            <Route>
              <Redirect to="~/dashboard" />
            </Route>
          </DashboardPage>
        </Route>

        {/* Ruta no encontrada -> login */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
