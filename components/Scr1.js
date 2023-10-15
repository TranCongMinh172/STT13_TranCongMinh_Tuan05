import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings'
import { useState } from 'react';

export default function Scr1({navigation}) {
    let img = require("../assets/vs_blue.png")
    let [color, setColor] = useState(img)   
    return ( 
        <View style ={styles.container}>
            <View style = {styles.top}>
                <View>
                    <Image source ={color} style={styles.img}  ></Image>
                </View>
            </View>
            <View style ={styles.content}>
                <View>Điện thoại Vsmart Joy 3 - Hàng chính hãng</View>
                <View style = {styles.sao} >
                    <AirbnbRating
                        reviewColor="#000"
                        reviewSize={0}
                        size={20}
                        style = {styles.sao1}
                    ></AirbnbRating>
                    <Text style={{marginTop:20}}>(Xem 828 đánh giá)</Text>
                </View>
                <View style = {styles.price}>
                    <Text style={{fontSize:16, fontWeight:700}}>1.790.000 d</Text>
                    <Text style={{fontSize:14,color:"grey", textDecorationLine:"line-through"}}>1.790.000 d</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"red", fontSize:16, fontFamily:"Roboto"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                </View>
                <View style={{marginTop:15}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        {navigation.navigate("Scr2",{
                            color, setColor
                        })}
                    }} >
                        <Text>4 MÀU-CHỌN MÀU</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style ={{color:"white"}}>CHỌN MUA</Text>
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
        alignItems: 'center',
        // justifyContent: 'center',
    },

    img:{
        width:300,
        height:360       
    },
    sao:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    sao1:{
        marginTop:-20
    },
    price:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"70%"
    },
    button:{
        borderWidth:1,
        borderColor:"black",
        borderRadius:7,
        width:"100%",
        height:30,
        alignItems:"center",
        justifyContent:"center"
    },
    bottom:{
        marginTop:70
    },  
    button1:{
        borderWidth:1,
        
        borderRadius:7,
        width:"100%",
        height:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red"
    }
});