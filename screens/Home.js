import React from 'react';
import { useState, useEffect } from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';


import {COLORS, NFTData} from '../constants';
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components';

const Home = () => {

    const [NftData, setNftData] = useState(NFTData)

    const handleSearch = (text) => {

        if(!text.length) return setNftData(NFTData)

        const newData = NFTData.filter(item => 
            item.name.toLowerCase().includes(text.toLowerCase())
        ); 
        if(newData.length) {
            setNftData(newData)
        } else {
            setNftData(NFTData)
        }

    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList
                        data={NftData}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <NFTCard data={item} />} 
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View style={{position: 'absolute', top: 0, bottom:0, right:0, left:0, zIndex: -1}}>
                    <View style={{height: 300, backgroundColor: COLORS.primary}} />
                    <View style={{flex: 1, backgroundColor: COLORS.primary}} />
                </View>
            </View>
        </SafeAreaView>
                    
    );
}

const styles = StyleSheet.create({})

export default Home;
