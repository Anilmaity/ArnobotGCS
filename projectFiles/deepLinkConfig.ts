import { Routes } from './routes'

export const linking = {
  prefixes: [
    /* your linking prefixes */
    'matruapp://app/',
    'https://matru.in/app/',
  ],
  config: {
    screens: {
      [Routes.HomeStack]: {
        initialRouteName: Routes.Home,
        screens: {
          [Routes.Home]: Routes.Home,
          [Routes.CameraScreen]: Routes.CameraScreen,
        },
      },

    },
  },
}
