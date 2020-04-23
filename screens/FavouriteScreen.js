import React from 'react';
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from "react-redux";
import { HeaderButtons ,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View ,Text,StyleSheet} from 'react-native'



 const FavouriteScreen =(props)=> {

  const favMeals =useSelector(state=>state.meals.favouriteMeals)
  //  const favMeals =MEALS.filter(meal=>meal.id === 'm1' || meal.id ==='m2')

  if(favMeals.length === 0 || !favMeals){
    return(
      <View style={styles.content}>
        <Text>No Favourite Meals Found.</Text>
      </View>
    )
  }
  return (
   <MealList listData={favMeals} navigation={props.navigation}/>
  );
}



FavouriteScreen.navigationOptions=navData=>{
  return{
  headerTitle:'Your Favourites!',
 headerLeft:()=>
   <HeaderButtons  HeaderButtonComponent={HeaderButton}>
     <Item  title='Menu'  iconName='ios-menu' 
     onPress={()=>{
       navData.navigation.toggleDrawer();
     }}/>
   </HeaderButtons>
 
   
    }
}


const styles=StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default FavouriteScreen