import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors, fonts } from '../../utils'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Share from 'react-native-share';
import { Icon } from 'react-native-elements/dist/icons/Icon';
export default function ArtikelDetail({ navigation, route }) {
    const item = route.params;
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{
                    uri: item.image
                }} style={{
                    width: '100%',
                    height: 220
                }} />
                <TouchableOpacity style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: colors.primary,
                    width: 120,
                    margin: 10,
                    borderRadius: 10,
                    alignSelf: 'flex-end'
                }} onPress={() => {
                    Share.open({
                        url: item.link
                    })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => {
                            err && console.log(err);
                        });
                }}>
                    <Icon type='ionicon' name='share-social-outline' color={colors.white} size={20} />
                    <Text style={{
                        left: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.white
                    }}>Bagikan</Text>
                </TouchableOpacity>
                <View style={{
                    padding: 20,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        color: colors.primary,
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        borderBottomWidth: 3,
                        borderBottomColor: colors.secondary,
                        fontSize: 20,
                    }}>{item.judul}</Text>
                    <RenderHtml

                        source={{
                            html: item.keterangan
                        }}
                    />


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})