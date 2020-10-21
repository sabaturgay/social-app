import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider } from 'unitx-ui';
import { PostItem, mockPostItemProps } from './components/PostItem';

export default function App() {
  return (
    <ApplicationProvider>
      <PostItem
        {...mockPostItemProps}
      />
    </ApplicationProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
