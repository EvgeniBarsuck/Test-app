import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBoxHintsActions } from '../../Redux/Hero/actions';

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

// eslint-disable-next-line react/prop-types
export default function HeroSelect({ onSelecthandleChange }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchBoxHints = useSelector((state) => state.hero.searchBoxHints);
  const limit = useSelector((state) => state.hero.limit);

  return (
    <Autocomplete
      id="searchBox"
      style={{ width: 300 }}
      options={searchBoxHints || []}
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
          onKeyUp={() => {
            onSelecthandleChange(params.inputProps.id, params.inputProps.value);
            dispatch(getSearchBoxHintsActions({
              name: params.inputProps.value,
              page: 1,
              limit,
            }));
          }}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}
