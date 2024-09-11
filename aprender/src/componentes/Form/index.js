import React from "react";
import { View,Text,TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>altura</Text>
                <TextInput
                placeholder="sua altura"
                keyboardType="numeric"></TextInput>
                <Text>peso</Text>
                <TextInput 
                placeholder="seu peso"
                keyboardType="numeric"
                ></TextInput>
                <Button title="rapaz"></Button>
            </View>
        </View>
        )
}