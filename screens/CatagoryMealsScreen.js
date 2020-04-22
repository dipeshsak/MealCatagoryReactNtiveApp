import React from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import { CATAGORIES,MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'



 const CatagoryMealScreen =(props)=> {
//console.log("********************8",MEALS)
  



  const catId= props.navigation.getParam('catagoryId');
  //console.log("**********catid**********8",)
  
  const displayedMeals = MEALS.filter(
    meal=> meal.catagoryIds.indexOf(catId) >= 0,
    
  )

  return (
    <MealList  listData={displayedMeals} navigation={props.navigation}/>
  );
}


CatagoryMealScreen.navigationOptions = navigationData =>{
    const catId= navigationData.navigation.getParam('catagoryId');

  const selectedCatagory=CATAGORIES.find(cat=>cat.id === catId)

  return{
    headerTitle:selectedCatagory.title,
    
    
  }
}




export default CatagoryMealScreen