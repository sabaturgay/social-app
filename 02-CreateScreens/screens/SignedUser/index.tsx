import React from 'react'
import { StyleSheet } from 'react-native'
import { 
  Layout,
  Grid,
  Button,
  Text,
  Image,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from 'unitx-ui'
import { Trends, mockTrendsProps } from './screens/Trends'
import { Home, mockHomeProps } from './screens/Home'
import { Profile, mockProfileProps } from './screens/Profile'
import { User } from '../../type'

export type SignedUserProps = {
  user: User;
}
export const mockSignedUserProps: SignedUserProps = {
  user: {
    username: 'Maria',
    email: 'maria@university.edu',
    image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  }
}

export const SignedUser = (props: SignedUserProps) => {
  const {
    user
  } = props
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    <Layout style={{ flex: 1,}}>
      {/* TopBar */}
      <Grid 
        style={{
          height: '15%',
          size: 12,
          backgroundColor: 'rgba(0, 153, 255, 0.5)',
        }}>
        <Grid
          col
          style={{
            size: 2
          }}
        >
          <Image 
            source={{ uri: user.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50
            }}
          />
        </Grid>
        <Grid
        col
          style={{
            size: 6
          }}
        >
          <Text category="h6">{user.username}</Text>
          <Text category="s1">{user.email}</Text>
        </Grid>
        
        <Grid
          col
          style={{ 
            justifyContent: 'space-around',
            size: 3,
          }}
        >
          <Button>Create Post</Button>
          <Button status="danger">Signout</Button>
        </Grid>
      </Grid>

      {/* Content */}
      <Grid
        style={{height: '78%' }}
      >
        <Profile 
          {...mockProfileProps}
        />
        {/* <Home 
          {...mockHomeProps}
        /> */}
        {/* <Trends
          {...mockTrendsProps}
        /> */}

      </Grid>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='trending-up'/>
          )} 
          title='Trends'
        />
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='home'/>
          )}
          title='Home'
        />
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='account'/>
          )}
          title='Profile'
        />
      </BottomNavigation>

    </Layout>
  )
}
