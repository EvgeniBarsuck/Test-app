import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBoxHintsActions } from '../../Redux/Hero/actions';
import useStyles from '../../Style/searchBoxStyle';

const HeroSelect = React.memo(({ onSelecthandleChange }) => {
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
});

HeroSelect.propTypes = {
  onSelecthandleChange: PropTypes.func.isRequired,
};

export default HeroSelect;
