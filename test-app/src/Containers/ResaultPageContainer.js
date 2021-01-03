import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import ResaultPage from '../Pages/ResaultPage/ResaultPage';
import resaultPageSelector from '../Selectors/resaultPageSelector';
import style from '../Style/mainStyle';

const mapStateToProps = (state) => ({
  filterHeroes: resaultPageSelector(state),
});

export default withStyles(style)(connect(mapStateToProps, null)(ResaultPage));
