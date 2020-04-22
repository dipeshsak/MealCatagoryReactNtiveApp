import React from 'react';
import { StyleSheet, Text, View,Button,FlatList, TouchableOpacity,Platform } from 'react-native';
import { CATAGORIES } from '../data/dummy-data'
import { HeaderButtons ,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
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

CatagoriesScreen.navigationOptions=navData=>{
  return{
  headerTitle:'Meal Catagories',
 headerLeft:()=>
   <HeaderButtons  HeaderButtonComponent={HeaderButton}>
     <Item  title='Menu'  iconName='ios-menu' 
     onPress={()=>{
       navData.navigation.toggleDrawer();
     }}/>
   </HeaderButtons>
 
   
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


export default CatagoriesScreen