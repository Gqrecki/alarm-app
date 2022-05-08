import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  touch = () =>{
      this.props.func(this.props.text)
  }

  render() {
    return (
      <View style={{}}>
          <TouchableOpacity onPress={this.touch}>
              {this.props.selected.includes(this.props.text)?
                <View style={{margin: 1,backgroundColor: "#47ffcc", width: 40, height: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "#636363", fontSize: 20,}}> {this.props.text} </Text>
                </View>
               :
               <View style={{margin: 1,width: 40, height: 40, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: "#47ffcc", fontSize: 20,}}> {this.props.text} </Text>
                </View>
             
                
            }
         
          </TouchableOpacity>
        
      </View>
    );
  }
}