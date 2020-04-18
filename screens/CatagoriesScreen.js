import React from 'react';
import { StyleSheet, Text, View,Button,FlatList, TouchableOpacity,Platform } from 'react-native';
import { CATAGORIES } from '../data/dummy-data'




 const CatagoriesScreen =(props)=> {
   const renderGridItem =(itemData)=>{
  return ( <TouchableOpacity 
  style={styles.gridItem}
  onPress={()=>{
    props.navigation.navigate({routeName:'CatagoryMeals',params:{
      catagoryId:itemData.item.id
    }});

  }}>  

  <View >
  <Text>{itemData.item.title}</Text>
  </View>
  </TouchableOpacity>  
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
  gridItem:{
    flex:1,
    margin:15,
    height:150
  },
});


export default CatagoriesScreen