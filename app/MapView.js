import React from 'react';
import {
  requireNativeComponent
} from 'react-native';

export default class MapView extends React.Component {
  constructor(props) {
    super(props)

    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    if(!this.props.onRegionChange) {
      return;
    }

    this.props.onRegionChange(event.NativeEvent.region)
  }

  render() {
    return (
      <GDMapView {...this.props} onChange={this._onChange} />
    )
  }
}

MapView.propTypes = {
  marker: React.PropTypes.object,
  markers: React.PropTypes.array,
  zoom: React.PropTypes.number,
  centerCoordinate: React.PropTypes.object,
  showScale: React.PropTypes.bool,
  showsCompass: React.PropTypes.bool,
  onRegionChange: React.PropTypes.func,
};

const GDMapView = requireNativeComponent('GDMapView', MapView, {
  nativeOnly: { onChange: true }
});
