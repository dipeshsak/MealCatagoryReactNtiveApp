import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { CATAGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

 const CatagoryMealScreen =(props)=> {
  const catId= props.navigation.getParam('catagoryId');

  const selectedCatagory=CATAGORIES.find(cat=>cat.id === catId)

  return (
    <View style={styles.container}>
      <Text> The Catagory Meal Screen!!</Text>
      <Text>{selectedCatagory.title}</Text>
      <Button title="Go to Meals Details!" onPress={()=>{
        props.navigation.navigate({routeName:'MealDetails'})
      }} />
      <Button title="Go Back!" onPress={()=>{
        props.navigation.pop();
      }} />
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