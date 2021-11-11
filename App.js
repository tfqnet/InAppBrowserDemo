/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import WebView from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.constainer}>
      <WebView
        style={styles.content}
        source={{uri: 'https://www.petronas.com'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;
