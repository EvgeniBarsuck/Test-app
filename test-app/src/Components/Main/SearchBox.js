import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterHeroActions } from '../../Redux/Hero/actions';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default function HeroSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterResult = useSelector((state) => state.hero.filterResult);
  const history = useHistory();

  return (
    <Autocomplete
      id="free-solo-demo"
      style={{ width: 300 }}
      options={filterResult || []}
      classes={{
        option: classes.option,
      }}
      freeSolo
      getOptionLabel={(option) => option.name || ' '}
      renderOption={(option) => (
        <div className={classes.root}>
          <p>{ `${option.name}` }</p>
          <Link underline="none" href={`/hero/${option.id}`}>
            <Button>
              open
            </Button>
          </Link>
        </div>
      )}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Choose a hero"
          variant="outlined"
          autoComplete="new-password"
          onKeyUp={() => dispatch(getFilterHeroActions(params.inputProps.value))}
          onKeyDown={(e) => { if (e.keyCode === 13) history.push('/hero/seacrh'); }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
