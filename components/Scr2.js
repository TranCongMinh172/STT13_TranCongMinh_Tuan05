import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings'



export default function Scr2({navigation,route}) {

    // console.log(route)      ;
        let {color,setColor} = route.params
        let [color2,setColor2] =useState(color)
    useEffect(()=>{
        setColor(color2)
    },[color2])
    return ( 
        <View style ={styles.container}>
            <View style ={styles.top}>
                <Image source={color2} style ={styles.img}></Image>
                <View style={{marginTop:20, marginRight:70}}>
                <Text>Điện Thoại Vsmart Joy 3</Text>
                <Text>Hàng chính hãng</Text>
                </View>
            </View>
            <View style ={styles.bottom}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style ={styles.bottom1}>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                         setColor2( require("../assets/vs_silver.png"))
                    }} ></TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={()=>{
                        setColor2( require("../assets/vs_red.png"))
                    }} ></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={()=>{
                         setColor2( require("../assets/vs_black.png"))
                    }} ></TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={()=>{
                         setColor2( require("../assets/vs_blue.png"))
                    }} ></TouchableOpacity>
                    <TouchableOpacity style={styles.button4} onPress={()=>{
                        navigation.navigate("Scr1")
                    }}>
                        <Text style={{color:"white"}} >XONG</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    top:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
       
    img:{
        width:150,
        height:190
    },
    bottom:{
        marginTop:8,
        backgroundColor:"grey",
        height:"100%"
    },
    bottom1:{
        alignItems:"center",
        justifyContent:"space-between",
       
    },
    button:{
        width:80,
        height:80,
        backgroundColor:"silver",
        margin:10
    },
    button1:{
        width:80,
        height:80,
        backgroundColor:"red",margin:10
    },
    button2:{
        width:80,
        height:80,
        backgroundColor:"black",margin:10
    },
    button3:{
        width:80,
        height:80,
        backgroundColor:"blue",margin:10
    },

    button4:{
        width:"90%",
        height:40,
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7
    }
});