import React from 'react'
import { StyleSheet } from 'react-native'
import { 
  Layout,
  Grid,
  Button,
  Text,
  Image
} from 'unitx-ui'

export type SigninProps = {

}

export const Signin = (props: SigninProps) => {
  return (
    <Layout style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Image 
        source={{ uri: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}
        style={[StyleSheet.absoluteFill, { opacity: 0.8 }]}
      />
      <Grid 
        col
        style={{
          height: 471,
          size: 5,
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'rgba(125, 140, 151, 0.8)',
        }}>

        <Text category="h6">University Social</Text>
        <Text category="s1">Find your friends' posts</Text>
        <Grid 
        style={{ 
           justifyContent: 'space-between',
           size: 12,
          }}>
          <Button>Signin</Button>
          <Button>Signup</Button>
        </Grid>
      </Grid>
    </Layout>
  )
}