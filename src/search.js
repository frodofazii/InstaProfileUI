import * as React from 'react';
import { Text, View,StyleSheet,SafeAreaView,Image,Button  } from 'react-native';
import { Ionicons,MaterialIcons} from "@expo/vector-icons"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";
import Imagegallery from "./Imagegallery";
const Tab = createMaterialTopTabNavigator();

export default class search extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"
                    ></Ionicons>
                    <Text style={{fontSize: 22,alignContent:"center",paddingBottom:10,fontWeight:"400"}}>theapplehub</Text>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                <View style={styles.profileImage}>
                  <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
              </View>
                <View style={{flex:3}}>
                <View style={{flexDirection:"row",justifyContent:'space-around',paddingLeft:20,paddingTop:25}}>
                <View>
                <Text style={{fontSize:20}}>2,079</Text>
                <Text>Posts</Text>
                </View>
                <View>
                <Text style={{fontSize:20}}>396 k</Text>
                <Text>Followers</Text>
                </View>
                <View>
                <Text style={{fontSize:20}}>40</Text>
                <Text>Following</Text>
                </View>
              </View>
              </View>
              
              </View>
              <Text style={{fontSize:15,paddingLeft:20,paddingTop:10}}>Apple Hub</Text>
              <Text style={{fontSize:15,paddingLeft:20,fontWeight:"100"}}>Blogger</Text>
              <Text style={{fontSize:15,paddingLeft:20}}>Apple new and rumors</Text>
              <Text style={{fontSize:15,paddingLeft:20}}>Not affiliated with Apple Inc.</Text>
              <Text style={{fontSize:15,paddingLeft:20}}>Apple and Apple  logo are registered tradmarks of Apple Inc </Text>
              <Text style={{fontSize:15,paddingLeft:20,color:"blue"}}>theapplehub.com</Text>
              <Text style={{fontSize:15,paddingLeft:20}}>Followed by <Text>itshaider01 </Text> and 
              <Text>everythingwithapplepro</Text>  </Text>

                <View style={{flexDirection:"row",paddingTop:15,paddingLeft:20}}>
                <Button 
                title="Following"
                />
                <Button 
                title="Message"
                /><Button 
                title="Email"
                />
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={styles.profileImage}>
                  <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
              <View style={styles.profileImage}>
                  <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
              <View style={styles.profileImage}>
                  <Image source={require("../assets/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
              </View>
              <Tab.Navigator>
                 <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="image" component={Imagegallery} />
                </Tab.Navigator>

                </SafeAreaView>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"

    },
    infoContainer:{
        // alignSelf:"center",
        // alignItems:"center",
        flexDirection:"row",
        alignSelf:"center",
        alignItems:"center",
        paddingLeft:10

    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
 
    
    titleBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        width:120,
        height:120,
        borderRadius:100,
        overflow :"hidden",
        paddingLeft:20
    },
});