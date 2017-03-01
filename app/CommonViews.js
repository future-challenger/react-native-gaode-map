/**
 * Created by Uncle Charlie, 2017/02/25
 * 
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function CommonButton({title, style, onClick}) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[style]} onPress={() => onClick()}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function APPNavBar({title, leftTitle, rightTitle, onLeftClick, onRightClick}) {
  return (
    <View style={{ height: 64, backgroundColor: 'blue', justifyContent: 'center' }}>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', }}>
        <CommonButton title={leftTitle} style={{ width: 50, height: 10, marginLeft: 10 }} onClick={onLeftClick} />
        <Text style={{ textAlign: 'center', }}>
          {title || ''}
        </Text>
        <CommonButton title={rightTitle} style={{ width: 50, height: 10, marginRight: 10 }} onClick={onRightClick} />
      </View>
    </View>
  );
}