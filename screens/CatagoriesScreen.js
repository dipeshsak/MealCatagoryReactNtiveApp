import React from 'react';
import { StyleSheet, Text, View,Button,FlatList, TouchableOpacity,Platform } from 'react-native';
import { CATAGORIES } from '../data/dummy-data'
import CatagoryGridTile from '../components/CatagoryGridTile'


 const CatagoriesScreen =(props)=> {
   const renderGridItem =(itemData)=>{
  return ( 
    <CatagoryGridTile  
    title={itemData.item.title}
    color={itemData.item.color}
    onSelect={()=>{
      props.navigation.navigate({routeName:'CatagoryMeals',params:{
        catagoryId:itemData.item.id
      }});
  
    }}
    />
   )
}
  return (
    <FlatList 
    keyExtractor={(item,index)=>item.id}
    data={CATAGORIES}
    renderItem={renderGridItem} 
    numColumns={2} />
  );
};

CatagoriesScreen.navigationOptions={
  headerTitle:'Meal Catagories',
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


export default CatagoriesScreen