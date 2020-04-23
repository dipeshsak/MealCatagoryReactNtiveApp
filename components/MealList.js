import React from 'react'
import { FlatList,StyleSheet,View } from 'react-native'
import Mealitem from './Mealitem'
import { useSelector } from 'react-redux';


const MealList = props =>{
     const favouriteMeals = useSelector(state => state.meals.favouriteMeals)
    const renderMealItem=itemData=>{

      const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id)
        return(<Mealitem 
          title={itemData.item.title} 
          duration={itemData.item.duration}
          complexcity={itemData.item.complexcity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelectMeal={()=>{
            props.navigation.navigate({routeName:'MealDetails',
            params:{
              mealId:itemData.item.id,
              mealTitle:itemData.item.title,
              isFav:isFavourite
            }});
          }}  />)
        }
  return (
    <View style={styles.list}>
    <FlatList data={props.listData} 
    keyExtractor={(item,index) => item.id}
    renderItem={renderMealItem} 
    style={{width:'90%'}}
    />    
  </View>
  )
};

const styles =StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

})

export default MealList;