import { Switch, Route } from 'react-router-dom';
import MainPage from '../Containers/MainConteiner';
import SelectedHero from '../Containers/SelectedHeroContainer';
import ResultPage from '../Containers/ResaultPageContainer';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/hero/search" component={ResultPage} />
      <Route exact path="/hero/:id" component={SelectedHero} />
      <Route exact path="/hero" component={MainPage} />
    </Switch>
  </main>
);

export default Main;
