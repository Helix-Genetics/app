import { IUser } from '@/lib/resources/user/user.interface'

export interface IAuth {
  access_token: string
  refresh_token: string
  current_user: IUser
}