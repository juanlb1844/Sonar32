import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Se importan en esta seccion la paginas de la aplicacion
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
// import AppContext from '../context/AppContext';

import Logins from '../pages/Logins';
import Politica from '../pages/Politica';

const App = () => (
    <BrowserRouter> 
      <Layout>
        <Switch>
          {/* Aqui van las rutas de la aplicacion */}
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/companies" component={Home} />
          <Route exact path="/login" component={Logins} />
          <Route exact path="/politica-de-privacidad" component={Politica} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );

export default App;
