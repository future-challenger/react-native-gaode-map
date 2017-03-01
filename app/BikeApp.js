import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// const GDMapView = requireNativeComponent('GDMapView', null)
import MapView from './MapView';
import CommonButton, { APPNavBar } from './CommonViews'
// import NavigationBar from './CommonViews';

export default class BikeApp extends React.Component {
  constructor(props) {
    super(props)

    this._onLeftClick = this._onLeftClick.bind(this);
    this._onRightClick = this._onRightClick.bind(this);
  }

  _onLeftClick() {
    console.log('===>menu click')
    this.props.navigator.push({ login: true })
  }

  _onRightClick() {
    console.log('===>search click')
  }

  render() {
    //zoomEnabled={true} zoom={13} showsCompass={false}
    let marker = {
      category: 1,
      latitude: 39.892520,
      longitude: 116.336370,
    };
    let markers = [
      {
        category: 2,
        latitude: 39.998293,
        longitude: 116.352343,
      },
      {
        category: 2,
        latitude: 40.001442,
        longitude: 116.353915,
      },
      {
        category: 2,
        latitude: 39.979590,
        longitude: 116.324219,
      },
      {
        category: 1,
        latitude: 39.989105,
        longitude: 116.353915,
      },
      {
        category: 1,
        latitude: 39.998293,
        longitude: 116.324219,
      }
    ];

    let title = 'Title';

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="dark-content"
        />
        <APPNavBar
          title='Bike App'
          leftTitle='Menu'
          rightTitle='Search'
          onLeftClick={this._onLeftClick}
          onRightClick={this._onRightClick}
        />
        <MapView
          style={{ flex: 1, }}
          marker={marker}
          showsCompass={false}
          markers={markers}
          zoom={10}
          centerCoordinate={{ latitude: 39.909520, longitude: 116.336170 }}
          showScale={false}
        />

        <View style={styles.toolContainer}>
          <FloatButton onClick={() => {
            console.log('on refresh click');
          }} style={{ marginTop: 3, marginLeft: 5 }} />

          <View
            style={styles.bottomButtonContainer}>
            <FloatButton onClick={() => {
              console.log('on relocate click');
            }} style={{ marginLeft: 5 }} />
            <TouchableOpacity onPress={() => {
              console.log('扫码开锁');
            }} style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text>
                  扫码开锁
              </Text>
              </View>
            </TouchableOpacity>
            <FloatButton onClick={() => {
              console.log('on relocate click');
            }} style={{ marginRight: 3 }} />
          </View>
        </View>

      </View>
    );
  }
}

function FloatButton({title, style, onClick}) {
  return (
    <TouchableOpacity style={style}>
      <View style={{ height: 40, width: 40, backgroundColor: 'red', borderRadius: 50 }}></View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'SR',
    backgroundColor: 'white',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    flex: 1,
  },
  toolContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 100,
  },
});