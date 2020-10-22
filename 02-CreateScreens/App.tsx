import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider , NavigatorScreen } from 'unitx-ui';
import { PostItem, mockPostItemProps } from './components/PostItem';
import { Signin } from './screens/Signin'
import { SignedUser, mockSignedUserProps } from './screens/SignedUser/index'
export default function App() {
  return (
    <ApplicationProvider>
      <SignedUser 
        {...mockSignedUserProps}
      />
      {/* <PostItem
        {...mockPostItemProps}
      /> */}
      {/* <Signin /> */}
      {/* <NavigatorScreen
        component={() => (
        )}
        name="signin"
      /> */}
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
