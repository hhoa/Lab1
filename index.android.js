/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Posts from './src/posts.js';

export default class lab1 extends Component {
  render() {
    return (
      <Posts />
    );
  }
}


AppRegistry.registerComponent('lab1', () => lab1);
