import React from 'react'
import { 
  Grid,
  List,
  TabBar,
  Tab,
  Icon
} from 'unitx-ui'
import { PostItem, mockPostItemProps, PostItemProps } from '../../../components/PostItem'

export type HomeProps = {
  posts: PostItemProps[];

}

export const mockHomeProps = {
  posts: Array(10).fill(mockPostItemProps)
}

export const Home = (props: HomeProps) => {
  const {
    posts
  } = props
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    <Grid
      col//={true}
      style={{
        flex: 1,
      }}
    >
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <Tab
          icon={(props) => (
            <Icon {...props} name='trophy-award'/>
          )} 
          title='University'
        />
        <Tab
          icon={(props) => (
            <Icon {...props} name='worker'/>
          )}
          title='Jobs'
        />
        <Tab
          icon={(props) => (
            <Icon {...props} name='account-group-outline'/>
          )}
          title='Fun'
        />
      </TabBar>
      <List
        style={{ width: '100%', height: 600 }}
        data={posts}
        renderItem={({ item })=> (
          <PostItem 
            {...item}
          />
        )}
      />
    </Grid>
  )
}