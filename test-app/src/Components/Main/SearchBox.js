/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedHeroActions } from '../../Redux/Hero/actions';

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
  const filterResult = useSelector((state) => state.hero.oneHero.results);

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={filterResult || []}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className={classes.root}>
          <p>{ `${option.name}` }</p>
          <Link underline="none" href={`/hero/${option.id}`}>
            <Button>
              search
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
          onKeyUp={() => dispatch(getSelectedHeroActions(null, params.inputProps.value))}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
