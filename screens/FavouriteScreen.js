import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 const FavouriteScreen =(props)=> {
  return (
    <View style={styles.container}>
      <Text> The Favourites Screen!!</Text>
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


export default FavouriteScreen