import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import { CATAGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'



 const CatagoryMealScreen =(props)=> {
//console.log("********************8",MEALS)
  



  const catId= props.navigation.getParam('catagoryId');
  //console.log("**********catid**********8",)
  const availableMeals =useSelector(state=>state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    meal=> meal.catagoryIds.indexOf(catId) >= 0,
    
  )

  if(displayedMeals.length === 0){
    return(
      <View style={styles.content}>
        <Text>No Meals found , May be check your Filters?</Text>
      </View>
    )
  }
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

const styles=StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})



export default CatagoryMealScreen