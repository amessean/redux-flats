import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedFlat } from '../actions';


class Flat extends Component {
  handleClick = () => {
    this.props.selectedFlat(this.props.flat);
  };
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    };
    return (
      <div className="card" style={style} onClick={this.handleClick} role="presentation">
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedFlat }, dispatch);
}

function mapStateToProps(state) {
  return {
    flats: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);

