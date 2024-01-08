import { authEndpoints } from '@/lib/resources/auth/service'
import { isAnyOf } from '@reduxjs/toolkit'

export const matchAuthChange = isAnyOf(
  authEndpoints.login.matchFulfilled,
  authEndpoints.verify.matchFulfilled
)
