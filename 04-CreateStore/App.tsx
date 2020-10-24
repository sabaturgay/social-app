import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Router,
  Route,
  Switch
} from 'unitx-ui'
import { ApplicationProvider } from 'unitx-ui';
import { PostItem, mockPostItemProps } from './components/PostItem';
import { Signin } from './screens/Signin'
import { SignedUser, mockSignedUserProps } from './screens/SignedUser/index'
import { Routes } from './routes'
import { Provider as StoreProvider, useSelector } from './store'

const App = () => {
  const [storeState] = useSelector((state) => {
    return {
      user: state.user
    }
  })
  console.log('storeState',storeState)
  return (
    <Switch>
      {
        storeState.user && (
          <Route path={Routes.user.root}>
            <SignedUser
              {...mockSignedUserProps}
            />
          </Route>
        )
      }
      <Route path={Routes.root}>
        <Signin />
      </Route>
    </Switch>
  )
}
export default function AppContainer() {
  return (
    <ApplicationProvider>
      <Router>
        <StoreProvider>
          <App />
        </StoreProvider>
      </Router>
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
