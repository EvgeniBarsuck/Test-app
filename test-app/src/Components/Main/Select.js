import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = {
  formControl: {
    margin: '10px',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: '10px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
};

export default class SimpleSelect extends React.Component {
  handleChange = (event) => {
    this.props.onSelecthandleChange(event.target.name, event.target.value);
  };

  render() {
    const {
      status,
      species,
      gender,
      limit,
    } = this.props;
    return (
      <div style={useStyles.root}>
        <div style={useStyles.formControl}>
          <InputLabel id="4l">Page limit</InputLabel>
          <Select
            labelId="4l"
            id="4"
            value={limit}
            name="limit"
            onChange={this.handleChange}
          >
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={75}>75</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </div>
        <div style={useStyles.formControl}>
          <InputLabel id="1l">status</InputLabel>
          <Select
            name="status"
            labelId="1l"
            id="1"
            value={status}
            onChange={this.handleChange}
          >
            <MenuItem value="Alive">Alive</MenuItem>
            <MenuItem value="Dead">Dead</MenuItem>
            <MenuItem value="Unknown">Unknown</MenuItem>
          </Select>
        </div>
        <div style={useStyles.formControl}>
          <InputLabel id="2l">species</InputLabel>
          <Select
            labelId="2l"
            id="2"
            value={species}
            name="species"
            onChange={this.handleChange}
          >
            <MenuItem value="Human">Human</MenuItem>
            <MenuItem value="Alien">Alien</MenuItem>
          </Select>
        </div>
        <div style={useStyles.formControl}>
          <InputLabel id="3l">gender</InputLabel>
          <Select
            labelId="3l"
            id="3"
            value={gender}
            name="gender"
            onChange={this.handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Femamle</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  onSelecthandleChange: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};
