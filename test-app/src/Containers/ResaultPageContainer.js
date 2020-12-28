import { connect } from 'react-redux';
import ResaultPage from '../Pages/ResaultPage/ResaultPage';
import resaultPageSelector from '../Selectors/resaultPageSelector';

const mapStateToProps = (state) => ({
  filterHeroes: resaultPageSelector(state),
});

export default connect(mapStateToProps, null)(ResaultPage);
