import { PostItemData } from '../../type'
import { store } from '../index'

export const createPost = (post: PostItemData) => {
  store.update((draft) => {
    draft.posts.push(post)
  })
}

export const deletePost = (post: PostItemData) => {
  store.update((draft) => {
    draft.posts = draft.posts.filter((postItem) => postItem.id !== post.id)
  })
}

export const getPosts = (tag: 'fun' | 'university' | 'jobs') => {
  store.update((draft) => {
    draft.taggedPosts[tag] = [{
      id: '123',
      description: 'Orange Juice',
      title: 'Wonderful',
      hashtag: '#fun',
      image: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    }]
  })
}
