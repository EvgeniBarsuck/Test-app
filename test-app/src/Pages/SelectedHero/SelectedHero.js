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
  getSelectedHero: PropTypes.func.isRequired,
  data: PropTypes.shape({
    selectedHero: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default React.memo(SelectedHero);
