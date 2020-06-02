import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from './flat';
import { setFlats } from '../actions';

class FlatList extends Component {
  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
