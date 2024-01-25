import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound'; 
import { Home } from '@mui/icons-material';
import Recetas from './pages/Recetas';



const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recetas" exact component={Recetas} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
};

export default App;