import React from "react";
import { Image, Text, View } from 'react-native';
import styles from './nasheedCard-Style';

const NasheedCard= props => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.nasheed.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.nasheed.title}</Text>
                <View style={styles.contain_container}>
                    <View style={styles.info_container}>
                        <Text>{props.nasheed.artist}</Text>
                        <Text style={styles.year}>{props.nasheed.year}</Text>
                    </View>
                    {props.nasheed.isSoldOut && (
                        <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>TÜKENDİ</Text>
                        </View>
                    )}
                    
                </View>
            </View>
        </View>
    )
};

export default NasheedCard;