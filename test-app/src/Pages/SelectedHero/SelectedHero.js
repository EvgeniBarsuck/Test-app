/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { getSelectedHeroActions } from '../../Redux/Hero/actions';

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
  componentDidMount() {
    this.props.getOneHero();
  }

  render() {
    if (this.props.oneHero.loading) {
      return (<p>Loading data</p>);
    }
    return (
      <div style={style.root}>
        <img src={this.props.oneHero.oneHero.image} alt="error" />
        <ul style={{ listStyleType: 'none' }}>
          <li>{`Name: ${this.props.oneHero.oneHero.name}`}</li>
          <li>{`Status: ${this.props.oneHero.oneHero.status}`}</li>
          <li>{`Species: ${this.props.oneHero.oneHero.species}`}</li>
          <li>{`Gender: ${this.props.oneHero.oneHero.gender}`}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  oneHero: state.hero,
});

const mapDispatchToProps = (dispatch, OwnProps) => ({
  getOneHero: () => dispatch(getSelectedHeroActions(OwnProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedHero);
