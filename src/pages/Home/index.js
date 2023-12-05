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

export default function Home({ navigation }) {

  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      __getTransaction();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);
      axios.post(apiURL + '1data_acara.php').then(x => {
        console.log(x.data);
        setData(x.data);
      })
    });

    axios.post(apiURLNEW + 'artikel').then(res => {
      console.log(res.data)
      setData2(res.data)
    })
  }

  const __renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SCek', item)} style={{
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.zavalabs
      }}>

        <View style={{
          flex: 1,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 30,
            color: colors.primary,
          }}>{item.acara}</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 28,
            color: colors.black,
          }}>{item.tanggal}</Text>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon type='ionicon' name='search' size={windowWidth / 25} color={colors.primary} />
        </View>
      </TouchableOpacity>
    )
  }


  const filterItems = (key, data) => {
    var query = key.toLowerCase();
    return data.filter(function (item) {
      return item.toLowerCase().indexOf(query) >= 0;
    })
  }

  const [pilih, setPilih] = useState({
    a: true,
    b: false
  })

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* header */}
      <View style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>

        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>Selamat datang,</Text>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.white
            }}>Al Ihsan Kerinci</Text>
          </View>

          <View>
            <Image source={require('../../assets/logo.png')} style={{
              width: 60,
              height: 60
            }} />
          </View>
        </View>


      </View>

      <Image source={require('../../assets/slide.png')} style={{
        width: windowWidth,
        height: 220,
      }} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <TouchableWithoutFeedback onPress={() => {
          setPilih({
            a: true,
            b: false
          })
        }}>
          <View style={{
            flex: 1,
            backgroundColor: pilih.a ? colors.primary : colors.white
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              textAlign: 'center',
              fontSize: windowWidth / 25,
              color: pilih.a ? colors.white : colors.black,
              marginVertical: 10,
              marginHorizontal: 10,
            }}>DAFTAR ACARA</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          setPilih({
            a: false,
            b: true
          })
        }}>
          <View style={{
            flex: 1,
            backgroundColor: pilih.b ? colors.primary : colors.white
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              textAlign: 'center',
              fontSize: windowWidth / 25,
              color: pilih.b ? colors.white : colors.black,
              marginVertical: 10,
              marginHorizontal: 10,
            }}>KEGIATAN</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>


      {pilih.a && <FlatList data={data} renderItem={__renderItem} />}
      {pilih.b && <View style={{
        paddingTop: 20,
        paddingHorizontal: 10,
        flex: 1,

      }}>

        <FlatList showsVerticalScrollIndicator={false} data={data2} renderItem={({ item }) => {
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
      </View>}








    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})