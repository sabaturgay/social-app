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
  Switch,
  Route,
  Card,
  // Modal,
  TouchableOpacity,
  useHistory,
  useData,
  Input
} from 'unitx-ui'
import { Modal } from 'unitx-ui/_/@ui-kitten/components'
import { Trends, mockTrendsProps } from './screens/Trends'
import { Home, mockHomeProps } from './screens/Home'
import { Profile, mockProfileProps } from './screens/Profile'
import { PostItemData } from '../../type'
import { User } from '../../type'
import { Routes } from '../../routes'
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

const RouteTabIndex = {
  [Routes.user.trends]: 0,
  [Routes.user.home]: 1,
  [Routes.user.profile]: 2,
}

const RouteTabName = {
  0: Routes.user.trends,
  1: Routes.user.home,
  2: Routes.user.profile,
}


export const SignedUser = (props: SignedUserProps) => {
  const {
    user
  } = props
  const history = useHistory()
  const [state, update] = useData({
    createPostVisible: false,
    selectedIndex: RouteTabIndex[history.location.pathname]
  })
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
          <Button
            onPress={() => update((draft)=>{
              draft.createPostVisible = true
            })}
          >
            Create Post
          </Button>
          <Button status="danger">Signout</Button>
        </Grid>
      </Grid>

      {/* Content */}
      <Grid
        style={{height: '78%' }}
      >
        <Switch>
          <Route
            path={Routes.user.profile}
           >
            <Profile 
              {...mockProfileProps}
            />
          </Route>
          <Route
            path={Routes.user.home}
          >
            <Home 
              {...mockHomeProps}
            />
          </Route>
          <Route
            path={Routes.user.trends}
          >
            <Trends
              {...mockTrendsProps}
            />
          </Route>
        </Switch>
      </Grid>
      <BottomNavigation
        selectedIndex={state.selectedIndex}
        onSelect={(index)=>{
          update((draft) => {
            draft.selectedIndex = index
          }, () => {
            history.push(RouteTabName[index])
          })
        }}
      >
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='trending-up'/>
          )} 
          onPress={() => {
            
          }}
          title='Trends'
        />
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='home'/>
          )}
          onPress={() => {
            console.log('onPressHome')
            history.push(Routes.user.home)
          }}
          title='Home'
        />
        <BottomNavigationTab
          icon={(props) => (
            <Icon {...props} name='account'/>
          )}
          onPress={() => {
            history.push(Routes.user.profile)
          }}
          title='Profile'
        />
      </BottomNavigation>
      <CreatePostModal 
        visible={state.createPostVisible}
        onDismiss={()=> update((draft)=>{
          draft.createPostVisible = false
        })}
        onSend={(data)=>{
          console.log('CreatePost', data)
        }}
      />
    </Layout>
  )
}


type CreatePostModalProps = {
  visible: boolean;
  onDismiss: () => void;
  onSend: (data: PostItemData) => void
}
const CreatePostModal = (props: CreatePostModalProps) => {
  const {
    onDismiss,
    onSend,
    visible
  } = props
  const [state, update] = useData({
    image: 'https://images.pexels.com/photos/4147872/pexels-photo-4147872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    title: '',
    description: '',
    hashtag: ''
  }) 

  return (
    <Modal
      visible={visible}
      onBackdropPress={onDismiss}
      // style={{ width: 800, height: 800 }}
    >
      <Card disabled={true}>
        <Text category="h6">Create Post</Text>
        <Grid>
          <Grid
            col
            style={{
              size: 3
            }}
          >
            <Input 
                placeholder="Enter Image Url"
                value={state.image}
                onChangeText={(image) => update((draft) => {
                  draft.image = image 
                })}
              />
            <Image
                source={{ uri: state.image }}
                style={{ width: 200, height: 200, borderRadius: 50 }}
              />
          </Grid>
          <Grid style={{ size: 1 }}/>
          <Grid
            col
            style={{
              size: 6
            }}
          >
            <Grid>
              <Input 
                placeholder="Enter Title"
                value={state.title}
                onChangeText={(title) => update((draft) => {
                  draft.title = title 
                })}
              />
            </Grid>
            <Grid>
              <Input 
                placeholder="Enter Description"
                value={state.description}
                onChangeText={(description) => update((draft) => {
                  draft.description = description 
                })}
              />
            </Grid>
            <Grid>
              <Input 
                placeholder="Enter Hashtag"
                value={state.hashtag}
                onChangeText={(hashtag) => update((draft) => {
                  draft.hashtag = hashtag 
                })}
              />
            </Grid>
            <Button
              onPress={() =>onSend(state)}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Button onPress={onDismiss}>
          DISMISS
        </Button>
      </Card>
    </Modal>
  )
}