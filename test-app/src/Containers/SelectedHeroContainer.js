import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { getSelectedHeroActions } from '../Redux/Hero/actions';
import SelectedHero from '../Pages/SelectedHero/SelectedHero';
import selectedHeroSelector from '../Selectors/selectedHeroSelector';
import style from '../Style/mainStyle';

const mapStateToProps = (state) => ({
  data: selectedHeroSelector(state),
});

const mapDispatchToProps = (dispatch, OwnProps) => ({
  getSelectedHero: () => dispatch(getSelectedHeroActions(OwnProps.match.params.id)),
});

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(SelectedHero));
