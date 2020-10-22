import React from 'react'
import { 
  Grid,
  List,
} from 'unitx-ui'
import { PostItem, mockPostItemProps, PostItemProps } from '../../../components/PostItem'

export type TrendsProps = {
  posts: PostItemProps[];

}

export const mockTrendsProps = {
  posts: Array(10).fill(mockPostItemProps)
}

export const Trends = (props: TrendsProps) => {
  const {
    posts
  } = props
  return (
    <Grid
      style={{
        flex: 1
      }}
    >
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