import { User } from '../../type'
import { store } from '../index'

export const signin = (user: User) => {
  store.update((draft) => {
    draft.user = user
  })
}

export const signup = (user: User) => {
  store.update((draft) => {
    draft.user = user
  })
}

export const signout = () => {
  store.update((draft) => {
    draft.user = null
  })
}