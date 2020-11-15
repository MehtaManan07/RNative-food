import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultScreen from './src/Screens/ResultScreen'
import SearchScreen from './src/Screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)  