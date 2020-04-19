import React from 'react';

import { TouchableOpacity,View,Text,StyleSheet,ImageBackground } from 'react-native';

const Mealitem = props =>{
    
    return(
<TouchableOpacity onPress={props.onSelectMeal}>
    <View style={styles.mealItem}>
        <View style={{...styles.mealRow,...styles.mealHeader}}>
            <ImageBackground source={{uri:props.image}} style={styles.bgImage} >
                <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}  </Text>
            </View>
            </ImageBackground>
        </View>
        <View style={{...styles.mealRow,...styles.mealDetails}}>
    <Text>{props.duration}m</Text>
    <Text>{props.complexcity.toUpperCase()}</Text>
    <Text>{props.affordability.toUpperCase()}</Text>
        </View>
    </View>
</TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    title:{
        
        fontSize:22,
        color:'white',
        textAlign:'center'
    },
    titleContainer:{
        paddingVertical:5,
        paddingHorizontal:12,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        overflow:'hidden',
        marginTop:10,
        marginBottom:5,
        borderColor:'#ccc',
        borderWidth:1
    },
    mealRow:{
        flexDirection:'row'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealHeader:{
        height:'85%'
    },
    mealDetails:{
      paddingHorizontal:10,
      justifyContent:'space-between',
      alignItems:'center',
      height:'15%'
    }
   
})

export default Mealitem;