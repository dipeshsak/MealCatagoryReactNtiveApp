import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

 const MealDetailsScreen =(props)=> {
  return (
    <View style={styles.container}>
      <Text> The MealDetails Screen!!</Text>
      <Button title="Go back to Catagories!" onPress={()=>{
        props.navigation.popToTop();
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default MealDetailsScreen