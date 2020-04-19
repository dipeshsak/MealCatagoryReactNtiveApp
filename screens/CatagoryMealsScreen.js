import React from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import { CATAGORIES,MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import Mealitem from '../components/Mealitem'



 const CatagoryMealScreen =(props)=> {
//console.log("********************8",MEALS)
  const renderMealItem=itemData=>{
  return(<Mealitem 
    title={itemData.item.title} 
    duration={itemData.item.duration}
    complexcity={itemData.item.complexcity}
    affordability={itemData.item.affordability}
    image={itemData.item.imageUrl}
    onSelectMeal={()=>{
      props.navigation.navigate({routeName:'MealDetails',params:{
        mealId:itemData.item.id
      }});
    }}  />)
  }



  const catId= props.navigation.getParam('catagoryId');
  //console.log("**********catid**********8",)
  
  const displayedMeals = MEALS.filter(
    meal=> meal.catagoryIds.indexOf(catId) >= 0,
    
  )

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} 
      keyExtractor={(item,index) => item.id}
      renderItem={renderMealItem} 
      style={{width:'90%'}}
      />
      
    </View>
  );
}


CatagoryMealScreen.navigationOptions = navigationData =>{
    const catId= navigationData.navigation.getParam('catagoryId');

  const selectedCatagory=CATAGORIES.find(cat=>cat.id === catId)

  return{
    headerTitle:selectedCatagory.title,
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default CatagoryMealScreen