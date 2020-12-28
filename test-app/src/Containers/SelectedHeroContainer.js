import { connect } from 'react-redux';
import { getSelectedHeroActions } from '../Redux/Hero/actions';
import SelectedHero from '../Pages/SelectedHero/SelectedHero';
import selectedHeroSelector from '../Selectors/selectedHeroSelector';

const mapStateToProps = (state) => ({
  data: selectedHeroSelector(state),
});

const mapDispatchToProps = (dispatch, OwnProps) => ({
  getSelectedHero: () => dispatch(getSelectedHeroActions(OwnProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedHero);
