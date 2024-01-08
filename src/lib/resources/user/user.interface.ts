export interface IUser {
  id: string,
  first_name: string,
  middle_name: string,
  last_names: string,
  email: string,
  phone_number: string,
  username: string,
  is_active: true,
  avatar: string,
  role_id: string,
  created_at: string,
  updated_at: string,
  role: {
    id: string,
    name: string,
    permissions: []
  },
}