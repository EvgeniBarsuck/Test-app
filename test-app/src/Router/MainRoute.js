import { Switch, Route } from 'react-router-dom';
import MainPage from '../Pages/Main/Main';
import SelectedHero from '../Pages/SelectedHero/SelectedHero';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/hero" component={MainPage} />
      <Route path="/hero/:id" component={SelectedHero} />
    </Switch>
  </main>
);

export default Main;
