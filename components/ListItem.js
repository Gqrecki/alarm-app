import React, { Component } from 'react';
import { View, Text, Switch, TouchableNativeFeedback, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Database  from './Database';
import Select from './Select';
import { Dimensions } from 'react-native';

export default class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(130), // początkowa wartość wysokości itema
      expanded: false, // zwinięty
      icon: "chevron-down"
    };
    this.toValue = 0 
    }

    toggle = () => {
      if (!this.state.expanded) {
        this.toValue = 180
        this.setState({icon: "chevron-up"})
      }else {
        this.toValue = 130
        this.setState({icon: "chevron-down"})
      }
    
      Animated.spring(this.state.height, {
          toValue: this.toValue,
          useNativeDriver: false,
      }).start();
    
      this.setState({expanded: !this.state.expanded})
    }

    delete = ()=>{
      Database.remove(this.props.id)
      this.props.refresh()
    }

    addDay = (day) =>{
      let dayArr = JSON.parse(this.props.days)
      dayArr = dayArr.day
      let arr;
      if(dayArr.includes(day)){
        let isDay = function (val){
          return val != day
        }
        arr = {day: dayArr.filter(isDay)}
      }else{
        dayArr.push(day)
        arr = {day:dayArr}
      }
      console.log(arr)
      Database.update(this.props.id, JSON.stringify(arr))
      this.props.refresh()
    }

    render() {

      let selectedShown = []
      let selected = JSON.parse(this.props.days).day
      selected.forEach(element => {
        let text;
        switch(element){
          case "PN":
          text = "PN"
          break;
          case "WT":
          text = "WT"
          break;
          case "ŚR":
          text = "ŚR"
          break;
          case "CZ":
          text = "CZ"
          break;
          case "PT":
          text = "PT"
          break;
          case "SB":
          text = "SB"
          break;
          case "ND":
          text = "ND"
          break;
        }

        let day = <Text style={{fontSize: 18, marginRight: 10, color: '#47ffcc'}}>{text}</Text>
        selectedShown.push(day)
      });

      let days = ["PN", "WT", "ŚR", "CZ", "PT", "SB", "ND"]

      let dayButtons = []
      days.forEach(element => {
        let day = <Select text={element} func={this.addDay} selected={JSON.parse(this.props.days).day} />
        dayButtons.push(day)
      });

      return (
          <Animated.View  style={{width: (Dimensions.get("window").width)*0.9, height: this.state.height, marginTop: 15, marginBottom: 5, backgroundColor: "#636363", borderRadius: 20}}>
            <View style={{width: '90%', flexDirection: "row", justifyContent: 'space-between', marginLeft: 10, marginRight: 10, alignItems:'center'}}>
              <Text style={{ fontSize: 40, color: "#47ffcc" }}> {this.props.hours}:{this.props.minutes}</Text>
              <Switch thumbColor={"#636363"} ios_backgroundColor="#47ffcc" trackColor={{ false: "#47ffcd", true: "#47ffcc" }} style={{justifyContent: 'flex-end'}}></Switch>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 10, alignItems:'center'}}>
              <TouchableOpacity onPress={this.delete}>
                <Ionicons name="trash-outline" size={40} color="#47ffcc" />
              </TouchableOpacity>    
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.Ripple('rgba(255,255,255,1)', true)}
                  onPress={this.toggle}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                >
                <View style={{ width: 40, height: 40 }}>
                  <Ionicons name={this.state.icon} size={40} color="#47ffcc" />
                </View>
              </TouchableNativeFeedback>
            </View>
            {         
              this.state.expanded ? 
                <View style={{flex:1, flexDirection:"row", justifyContent: 'space-around', alignItems: "center"}}>
                  {dayButtons}
                </View>
                :
                <View style={{flex:1, alignItems: "flex-end"}}>
                  <View style={{flex:1, flexDirection: "row", marginRight: 10}}>
                  {selectedShown}
                  </View>      
                </View>
                }
            </Animated.View>
        );
    }
}
