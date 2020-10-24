import React from 'react'
import {
  Grid,
  Image,
  Text,
  Button
} from 'unitx-ui'
import { User } from '../../../type'

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
        style={{ size: 12, }}
        md={{
          size: 8
        }}
      >
        <Text category="h4">Settings</Text>
      </Grid>
    </Grid>
  )
}