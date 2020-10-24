import React from 'react'
import {
  Grid,
  Image,
  Text,
  Button,
  Toggle,
  List,
  ScrollView
} from 'unitx-ui'
import { User } from '../../../type'
import { PostItem, mockPostItemProps } from '../../../components/PostItem'

type ProfileProps = {
  user: User;
}

export const mockProfileProps: ProfileProps = {
  user: {
    username: 'Maria',
    email: 'maria@university.edu',
    image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  }
}

export const Profile = (props: ProfileProps) =>{ 
  const {
    user
  } = props
  return (
    <Grid
      style={{ flex: 1 }}
    >
      <Grid 
        col
        style={{ size: 3 }}
      >
        <Image 
          style={{ width: 250, height: 300, borderRadius: 75 }}
          source={{ uri: user.image}}
        />
      </Grid>
      <Grid col style={{size: 1}}/>
      <Grid 
        col
        style={{ size: 12, width: '100%', height: 300 }}
        md={{
          size: 8,
          height: 650
        }}
      >
        <ScrollView style={{ height: '100%'}}>
          <Text category="h4">Settings</Text>
          <Info 
            data={{
              email: user.email,
              username: user.username,
              isPublic: true
            }}
            onDataChange={(data)=>{
              console.log('onDataChange', data)
            }}
          />
          <Grid>
            <List
              style={{ width: '100%', height: 250 }}
              data={Array(20).fill(mockPostItemProps)}
              renderItem={({ item })=> (
                <PostItem 
                  {...item}
                />
              )}
            />
          </Grid>
          <DangerZone 
            onDelete={()=>{
              console.log('onDeleteProfile')
            }}
          />
        </ScrollView>
      </Grid>
    </Grid>
  )
}

type InfoData = {
  email: string;
  isPublic: boolean;
  username: string;
}
type InfoProps = {
  data: InfoData
  onDataChange: (data: InfoData) => void
}
const Info = (props: InfoProps) => {
  const {
    data: {
      email,
      isPublic,
      username
    },
    onDataChange
  } = props
  return (
    <Grid>
      <Grid col>
        <Grid style={{ marginTop: 20 }}>
          <Text style={{ flex: 1 }} category="label">Email</Text>
          <Text style={{ flex: 1 }} category="s2">{email}</Text>
        </Grid>
        <Grid style={{ marginTop: 20 }}>
          <Text style={{ flex: 1 }} category="label">Username</Text>
          <Text style={{ flex: 1 }} category="s2">{username}</Text>
        </Grid>
        <Grid style={{ marginTop: 20 }}>
          <Text style={{ flex: 1 }} category="label">Public Profile</Text>
          <Toggle
            style={{ flex: 1 }}
            checked={isPublic}
            onChange={(checked) => {
              onDataChange({
                email,
                username,
                isPublic: checked
              })
            }}
          />
        </Grid>
      </Grid>
    </Grid>
    
  )
}

type DangerZoneProps = {
  onDelete: () => void;
}

const DangerZone = (props: DangerZoneProps) => {
  const {
     onDelete
  }  = props
  return (
    <Grid>
      <Grid col>
        <Text
          style={{ flex: 1 }}
          category="h6"
          status="danger"
        >
          DangerZone
        </Text>
        <Grid
          style={{ marginTop: 10 }}
        >
          <Text
            style={{ flex: 1 }}
            category="s2"
          >
            This action is not reversable. Are you sure?
          </Text>
          <Button
            status="danger"
            onPress={onDelete}
          >
            Delete My Profile
          </Button>
        </Grid>
      </Grid>
    </Grid>
    
  )
}