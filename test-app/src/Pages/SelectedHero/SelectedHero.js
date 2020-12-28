/* eslint-disable react/prop-types */
import React from 'react';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

class SelectedHero extends React.Component {
  constructor(props) {
    super(props);
    this.props.getSelectedHero();
  }

  render() {
    if (this.props.data.loading) {
      return (<p>Loading data</p>);
    }
    return (
      <div style={style.root}>
        <img src={this.props.data.selectedHero.image} alt="error" />
        <ul style={{ listStyleType: 'none' }}>
          <li>{`Name: ${this.props.data.selectedHero.name}`}</li>
          <li>{`Status: ${this.props.data.selectedHero.status}`}</li>
          <li>{`Species: ${this.props.data.selectedHero.species}`}</li>
          <li>{`Gender: ${this.props.data.selectedHero.gender}`}</li>
        </ul>
      </div>
    );
  }
}

export default SelectedHero;
