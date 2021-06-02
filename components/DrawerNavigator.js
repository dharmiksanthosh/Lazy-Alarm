import * as React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import UserDetail from '../screens/UserDetailScreen';
import SideBarMenu from './CustomSideBarMenu';
import Home from '../screens/Home';
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator(
    {
        Home:{
                screen:Home,
                navigationOptions:{
                    drawerIcon:<Icon name='home' type='fontawesome5'/>,
                    drawerLabel: 'Home'
                }
            },
        Profile:{
                    screen:UserDetail,
                    navigationOptions:{
                        drawerIcon:<Icon name='settings' type='fontawesome5'/>,
                        drawerLabel: 'Profile'
                    }
                }
    },
    {
        contentComponent:SideBarMenu
    },
    {
        initialRouteName:'Home'
    }
)