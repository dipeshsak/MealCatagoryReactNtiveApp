import React ,{ useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatagoriesScreen from './screens/CatagoriesScreen'
import CatagoryMealScreen from './screens/CatagoryMealsScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import FilterScreen from './screens/FilterScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { AppLoading } from 'expo';
import MealNavigator from './navigation/MealsNavigator'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import mealsReducer from './store/reducers/meals'
// import { enableScreen } from 'react-native-screens'

const rootReducer= combineReducers({
  meals:mealsReducer
})

const store = createStore(rootReducer)

// enableScreen();
// const fetchFonts = () => {
//   return fetchFonts.loadAsync({
//     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };
export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false)

  // if(!fontLoaded){
  //   return(
  //     <AppLoading 
  //     startAsync={fetchFonts}
  //     onFinish={()=>setFontLoaded(true)}
  //     />
  //   )
  // }
  return (
    <Provider store={store}><MealNavigator/></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
