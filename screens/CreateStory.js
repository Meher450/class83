import React,{Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInput, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts={
  "Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")
}

export default class CreateStory extends Component{
  constructor(props){
    super(props)
    this.state={
      fontsLoaded:false,
      previewImage:'image_1',
      dropdownHeight:40,
    }
  }
  async _loadFontsAsync(){
    await  Font.loadAsync(customFonts)
    this.setState({
      fontsLoaded:true
    })
  }

  componentDidMount(){
    this._loadFontsAsync()
  }

  render(){
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }
    else{
      let preview_Images={
        image_1: require('../assets/story_image_1.png'),
        image_2: require('../assets/story_image_2.png'),
        image_3: require('../assets/story_image_3.png'),
        image_4: require('../assets/story_image_4.png'),
        image_5: require('../assets/story_image_5.png')
      }
      return(
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
        <Image source={require('../assets/logo.png')} style={styles.iconImage}>
        </Image>
        </View>
        <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>New Story</Text>
        </View>
        </View>
        <View style={styles.fieldsContainer}>
        <ScrollView >
        <Image source={preview_Images[this.state.previewImage]} style={styles.previewImage}>
        </Image>
        <View style={{
          height:RFValue(this.state.dropdownHeight),
        }}>
        <DropDownPicker>
        </ScrollView>