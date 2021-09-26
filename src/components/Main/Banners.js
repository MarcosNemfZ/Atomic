import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'
import baners from '../../styles/baners';
import BannerItem from './BannerItem';

export default function Banners() {
    const scrollx = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container} >
        
        <FlatList  data={baners} renderItem={ ({ item }) => <BannerItem item={item} /> }
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        keyExtractor={ (item) => item.id }
        />
        
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 500,
        marginTop: 20,
        marginRight: -50,
        marginLeft: -10,
        marginBottom: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})
