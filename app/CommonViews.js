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
    <TouchableOpacity style={[style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}