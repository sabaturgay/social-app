import { createUseProvider } from 'store-provider'
import { 
  PostItemData,
  User
} from '../type'

export const {
  Provider,
  store,
  useSelector
} = createUseProvider({
  user: null as User | null,
  posts: [] as PostItemData[],
  trendPosts: [] as PostItemData[],
  taggedPosts: {
    fun: [] as PostItemData[],
    university: [] as PostItemData[],
    jobs: [] as PostItemData[]
  }
})

