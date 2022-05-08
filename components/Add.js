import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListItems from './ListItems';
import CircleButton from './CircleButton'
import { useEffect } from "react";
import Database from "./Database"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addalarm = () => {
    Database.add("00", "00")
        this.props.route.params.refresh()
        this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.v1}>
      <View style={styles.v2}>
        <View style={styles.scroll}>
          <ScrollView >
              <Text>Kiedyś tu coś będzie :)</Text>
          </ScrollView>
        </View>
        <View style={styles.btn}> 
          <CircleButton
            style = {styles.main}
            func = {() => this.addalarm()}
            source = {require('./add.png')}
            imgstyle = {styles.img}
          ></CircleButton>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  v1:{
    flex: 1,
    backgroundColor: '#636363'
  },
  v2:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#47ffcc',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scroll:{
    flex:7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  img: {
    height: 50,
    width: 50,
  },
  main: {
    height: 70,
    width: 70,
    borderRadius: 70,  
    backgroundColor: '#636363',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
