import React ,{ useState ,useEffect, useCallback } from 'react';
import { StyleSheet, Text, View,Switch } from 'react-native';
import { HeaderButtons ,Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors';


const FilterSwitch=props=>{
  return(
    <View style={styles.filterContainer}>
         <Text style={styles.textstyle}>{props.label}</Text>
         <Switch  
           trackColor={{true:Colors.primaryColor}}
           thumbColor={Colors.primaryColor}
           value={props.state}
           onValueChange={props.onChange}
         />
      </View>
  )
}

 const FilterScreen =(props)=> {

  const { navigation } =props;

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters=useCallback(()=>{
    const appliedFilters={
      glutenFree:isGlutenFree,
      lactoseFree:isLactoseFree,
      vegan:isVegan,
      isVegetarian:isVegetarian
    }
    console.log(appliedFilters)
  },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

  useEffect(()=>{
    navigation.setParams({save:saveFilters})
  },[saveFilters]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Avaiable Filters</Text>

      <FilterSwitch 
      label="Gluten-free"
      state={isGlutenFree}
      onChange={newValue=>setIsGlutenFree(newValue)}
      />
       <FilterSwitch 
      label="Lactose-free"
      state={isLactoseFree}
      onChange={newValue=>setIsLactoseFree(newValue)}
      />
       <FilterSwitch 
      label="Vegan"
      state={isVegan}
      onChange={newValue=>setIsVegan(newValue)}
      />
       <FilterSwitch 
      label="Vegetarian"
      state={isVegetarian}
      onChange={newValue=>setIsVegetarian(newValue)}
      />
    </View>
  );
}



FilterScreen.navigationOptions=navData=>{
  return{
  headerTitle:'Filter Meals',
 headerLeft:()=>
   <HeaderButtons  HeaderButtonComponent={HeaderButton}>
     <Item  title='Menu'  iconName='ios-menu' 
     onPress={()=>{
       navData.navigation.toggleDrawer();
     }}/>
   </HeaderButtons>,
   headerRight:()=>
   <HeaderButtons  HeaderButtonComponent={HeaderButton}>
   <Item  title='save'  iconName='ios-save' 
   onPress={
     navData.navigation.getParam('save')
   }/>
 </HeaderButtons>,
   
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textstyle:{
    fontSize:18
  },
  title:{
    fontSize:22,
    margin:20,
    textAlign:'center'
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:15
  }
});


export default FilterScreen