import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.data = this.props.data
    }

  render() {

    let data = this.props.data
    let alarms = []

    console.log(this.props.data)
    for (let i = 0; i < data.length; i++) {
      let hours = data[i].hours
      let minutes = data[i].minutes
      let days = data[i].days
      let id = data[i].id
      let alarm = <ListItem hours={hours} minutes={minutes} id={id} refresh={this.props.refresh} days={days} />
      alarms.push(alarm)
    }
    return (
      <View style={styles.container}>
          {alarms}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin:0
    },

});
