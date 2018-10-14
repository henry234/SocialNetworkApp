import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../containers/Home'
import DetailScreen from '../containers/Detail'

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Detail: DetailScreen
    },
    {
        navigationOptions: {

        }
    }
)

export default AppStack
