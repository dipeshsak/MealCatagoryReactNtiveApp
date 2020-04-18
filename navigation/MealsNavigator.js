import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CatagoriesScreen from '../screens/CatagoriesScreen'
import CatagoryMealScreen from '../screens/CatagoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import Colors from '../constants/Colors'

const MealNavigator=createStackNavigator({
    Catagories:{screen:CatagoriesScreen,
    
    },
    CatagoryMeals:{
        screen:CatagoryMealScreen,
    },
    MealDetails:MealDetailsScreen

},
{
    defaultNavigationOptions:{
     headerStyle:{
    backgroundColor:'white'
  },
  headerTintColor :Colors.primaryColor,
  headerTitleAlign:'center'
    }
}


)

export default createAppContainer(MealNavigator)