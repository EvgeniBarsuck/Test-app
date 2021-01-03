/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InformationTable from '../../Components/Main/InformationTable';

class SelectedHero extends React.Component {
  constructor(props) {
    super(props);
    this.props.getSelectedHero();
  }

  render() {
    if (this.props.data.loading) {
      return (<p>Loading data</p>);
    }
    const {
      name,
      status,
      species,
      gender,
    } = this.props.data.selectedHero;
    return (
      <div>
        <img src={this.props.data.selectedHero.image} alt="error" />
        <InformationTable
          name={name}
          status={status}
          species={species}
          gender={gender}
        />
      </div>
    );
  }
}

SelectedHero.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(SelectedHero);
