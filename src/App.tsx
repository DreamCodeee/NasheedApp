import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import nasheed_data from './nasheed-data.json';
import NasheedCard from './components/NasheedCard/nasheedCard';
import SearchBar from "./components/SearchBar/SearchBar";

function App(){
  const[List, setList] = useState(nasheed_data);
  //Açıldığı anda dataların hepsini görüntülemek istiyoruz

  interface Render {
    id: string;
    title: string;
    artist: string;
    album: string;
    year: number;
    isSoldOut: boolean;
    imageUrl: string;
  }
  
  
  const renderNasheed = ({ item }: { item: Render }) => (
    <NasheedCard nasheed={item} />
  );

  const renderSeperator = () => <View style={styles.seperator}/>

  const handleSearch = (text : String) => {
    const filteredList =nasheed_data.filter(nasheed => {
      const searchedText = text.toLowerCase();
      const currentTitle = nasheed.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  }

  return(
    <View style={styles.container}>
      <View style={styles.container}>{/* FlatListte ekranın hepsini kaplamış oldu */}
        <SearchBar onSearch={handleSearch}/>
        <FlatList 
        keyExtractor={item=> item.id}
        data={List} 
        renderItem={renderNasheed}
        ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
    borderWidth:1,
    borderColor:"#e0e0e0"

  }
})