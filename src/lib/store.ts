import { configureStore } from '@reduxjs/toolkit'
import { reducers } from '@/lib/reducers'

const preloadedState = {
  client_state: {}
}
export const makeStore = () => {
  return configureStore({
    reducer: {
      client_state: reducers
    },
    // add additional middlewares to concat
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    // add additional enhancers to concat
    enhancers: getDefaultEnhancers => getDefaultEnhancers({
      autoBatch: false
    }).concat()
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']