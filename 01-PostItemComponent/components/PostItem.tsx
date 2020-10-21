import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text, Icon, Image, Grid,
} from 'unitx-ui'

export type PostItemProps = {
  image: string;
  title: string;
  description: string;
}

export const mockPostItemProps: PostItemProps = {
  image: 'https://images.pexels.com/photos/65898/beech-fagus-sylvatica-fagus-deciduous-tree-65898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  title: 'Spring',
  description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
}

export const PostItem = (props: PostItemProps) => {
  const {
    image,
    title,
    description,
  } = props
  return (
    <Grid style={{ padding: 10 }}>
      <Grid
        col
        md={{ size: 3 }}
      >
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </Grid>
      <Grid
        col
        style={{
          justifyContent: 'space-between',
        }}
        md={{ size: 6 }}
      >
        <Grid>
          <Text category="h6">{title}</Text>
          <Text category="p1">{description}</Text>
        </Grid>
        <Grid style={{ size: 4, justifyContent: 'space-around' }}>
          <Icon name="heart" />
          <Icon name="star" />
          <Icon name="share-variant" />
        </Grid>
      </Grid>
    </Grid>
  )
}

const styles = StyleSheet.create({
  container: {
    // height: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
})
