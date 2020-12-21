import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/Main/Main';
import SelectedHero from '../Pages/SelectedHero/SelectedHero';
import ResultPage from '../Pages/ResaultPage/ResaultPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/hero" component={MainPage} />
      <Route exact path="/hero/seacrh" component={ResultPage} />
      <Route exact path="/hero/:id" component={SelectedHero} />
    </Switch>
  </main>
);

export default Main;
