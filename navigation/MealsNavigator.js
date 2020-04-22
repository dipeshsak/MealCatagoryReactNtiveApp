import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CatagoriesScreen from '../screens/CatagoriesScreen'
import CatagoryMealScreen from '../screens/CatagoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouritesScreen from '../screens/FavouriteScreen'
import FilterScreen from '../screens/FilterScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigation, createBottomTabNavigator } from 'react-navigation-tabs'

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


const FavNavigator=createStackNavigator({
    Favourites:FavouritesScreen,
    MealDetail:MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
       backgroundColor:'white'
     },
     headerTintColor :Colors.primaryColor,
     headerTitleAlign:'center'
       }
})


const MealsFavTabNavigator=createBottomTabNavigator({
    Meals:{screen:MealNavigator, navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    }
    
    },
    Favourites:{screen:FavNavigator, navigationOptions:{
        tabBarLabel:'Favourites!',
        tabBarIcon:(tabInfo)=>{
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    }}
},{
    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
}

)


const FilterNavigator =createStackNavigator({
    Filters:FilterScreen
},
{
    defaultNavigationOptions:{
        headerStyle:{
       backgroundColor:'white'
     },
     headerTintColor :Colors.primaryColor,
     headerTitleAlign:'center'
       }
})



const MainNavigator = createDrawerNavigator({
    MealsFavs:{screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerOptions:{
                drawerLabel:'Meals'
            }
        }
    
    
    },
    Filters: FilterNavigator
},{
    contentOptions:{
        activeTintColor:Colors.accentColor
    }
})

export default createAppContainer(MainNavigator)