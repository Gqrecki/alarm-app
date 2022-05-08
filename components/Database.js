import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("kacper_gorecki_4ib.db");

export default class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS tab (id integer primary key not null, hours text, minutes text, days text);"
            );
        });
    }

    static add(hours, minutes) {

        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO tab (hours, minutes, days) values ('" + hours + "', '" + minutes + "', '{\"day\":[]}')"
            );
        });

    }

    static update(id, days) {
        console.log("UPDATE tab SET days = '"+ days +"' WHERE id = "+id+")")
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE tab SET days = '"+days+"' WHERE id = "+id+""
            );
        });

    }

    static getAll() {
        const query = "SELECT * FROM tab";

        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                console.log(JSON.stringify(results))

                resolve(JSON.stringify(results));

            }, function (tx, error) {

                reject(error);

            });
        }))
    }

    static remove(id) {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM tab WHERE (id = "+ id +");"
            );
        });

    }


}

