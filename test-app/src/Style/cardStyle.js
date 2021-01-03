import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    paddingLeft: 5,
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default useStyles;
