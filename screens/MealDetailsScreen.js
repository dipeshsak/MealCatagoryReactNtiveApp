import React from 'react';
import { StyleSheet, Text, View,Button,ScrollView,Image} from 'react-native';
import { MEALS } from '../data/dummy-data'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'



const ListItem =props =>{
  return <View style={styles.listitem}>
    <Text>{props.children}</Text>
  </View>
}
 const MealDetailsScreen =(props)=> {
   const mealId= props.navigation.getParam('mealId');

   const selectedMeal = MEALS.find(meal=>meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
    <View style={styles.details}>
    <Text>{selectedMeal.duration}m</Text>
    <Text>{selectedMeal.complexcity.toUpperCase()}</Text>
    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
    </View>
     <Text style={styles.title}>Ingredients</Text>  
     <View>
     {selectedMeal.ingredients.map(ingredient=>(
        <ListItem key={ingredient}>{ingredient}</ListItem>  
     ))}
     </View>
     <Text style={styles.title}>Steps</Text>  
     {selectedMeal.steps.map(step=>(
       <ListItem key={step}>{step}</ListItem>
     ))}
    </ScrollView>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) =>{
  const mealId= navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal=>meal.id === mealId) 
  return{
            headerTitle:selectedMeal.title,
            headerRight:()=>
              <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                  title="Favourite"
                  iconName='ios-star'
                  onPress={()=>{
                    console.log('Marked as a Favourite!!')
                  }}
                />
              </HeaderButtons>
            

        }
}


const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:200
  },
  details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
  },
  title:{
    fontSize:22,
    textAlign:'center'
  },
  listitem:{
   marginVertical:10,
   marginHorizontal:20,
   borderColor:'#ccc',
   borderWidth:1,
   padding:10
  }
});


export default MealDetailsScreen