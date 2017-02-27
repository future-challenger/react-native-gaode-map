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
    <TouchableOpacity activeOpacity={0.7} style={[style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export function NavigationBar({leftButton, rightButton, leftTitle, rightTitle, onLeftClick, onRightClick, title}) {
  return (
    <View style={{ height: 64, backgroundColor: 'blue', justifyContent: 'center' }}>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {
          !leftButton ? <CommonButton title={leftTitle} onClick={onLeftClick} /> : leftButton
        }
        <Text style={{ textAlign: 'center', }}>
          {title}
        </Text>
        {
          !rightButton ? <CommonButton title={rightTitle} onClick={onRightClick} /> : rightButton
        }
      </View>
    </View>
  );
}