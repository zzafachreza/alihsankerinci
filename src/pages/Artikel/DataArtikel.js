import { Alert, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, apiURLNEW, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import { TouchableWithoutFeedback } from 'react-native';

export default function DataArtikel({ navigation, route }) {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(apiURLNEW + 'artikel').then(res => {
            console.log(res.data)
            setData(res.data)
        })
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({ item }) => {
                return (

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('ArtikelDetail', item)}>
                        <View style={{
                            marginVertical: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            borderColor: colors.border,
                            overflow: 'hidden'
                        }}>
                            <Image source={{
                                uri: item.image
                            }} style={{
                                width: '100%',
                                height: 200,
                            }} />
                            <View style={{
                                padding: 10,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 16,
                                }}>{item.judul}</Text>
                                <Text style={{
                                    textAlign: 'right',
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 16,
                                    color: colors.primary,
                                }}>Baca selangkapnya </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})