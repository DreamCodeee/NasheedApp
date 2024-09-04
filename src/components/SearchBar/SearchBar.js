import React from "react";
import { TextInput, View } from 'react-native';
import styles from './SearchBar_Style';

const SearchBar = (prop) => {
    return(
        <View style={styles.container}>
            <TextInput style={{paddingLeft:30, fontSize:17}} 
            placeholder="Ara..." onChangeText={prop.onSearch}/>
        </View>
    )
}

export default SearchBar;