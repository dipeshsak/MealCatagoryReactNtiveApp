import React ,{useEffect,useCallback} from 'react';
import { StyleSheet, Text, View,Button,ScrollView,Image } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { toggleFavourite } from '../store/actions/meals'



const ListItem =props =>{
  return <View style={styles.listitem}>
    <Text>{props.children}</Text>
  </View>
}
 const MealDetailsScreen =(props)=> {

  const availableMeals =useSelector(state=>state.meals.meals);
  //const currentMealFavourite =useSelector(state=>state.meals.favouriteMeals.some(meal => meal.id === mealId));
   const mealId= props.navigation.getParam('mealId');




   const selectedMeal = availableMeals.find(meal=>meal.id === mealId)

   const dispatch = useDispatch();

   const toggleFavouriteHandler =useCallback( () =>{
     dispatch(toggleFavourite(mealId))
   },[dispatch,mealId])


   useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavouriteHandler})
   }, [toggleFavouriteHandler])

  //  useEffect(() => {
  //   props.navigation.setParams({isFav: currentMealFavourite})
  //  }, [currentMealFavourite])

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
 // const mealId= navigationData.navigation.getParam('mealId');
  const mealTitle=navigationData.navigation.getParam('mealTitle');
  const toggleFavourite=navigationData.navigation.getParam('toggleFav');
  const isFavourite  =navigationData.navigation.getParam('isFav');
  
  // const selectedMeal = MEALS.find(meal=>meal.id === mealId) 
  return{
            headerTitle:mealTitle,
            headerRight:()=>
              <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                  title="Favourite"
                  iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
                  onPress={toggleFavourite}
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