import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  SCek,
  SPenyakit,
  STentang,
  SHasil,
  SDaftar,
  SAdd,
  SHutang,
  GetStarted,
  TimAdd,
  TimList,
  TimDetail,
  TimAddPemain,
  TimSet,
  TimSetDetail,
  TimMulai,
  TimHasil,
  ArtikelDetail,
  DataArtikel,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SAdd"
        component={SAdd}
        options={{
          headerShown: true,
          headerTitle: 'Input Manual',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: 'Scan Hadir',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="SDaftar"
        component={SDaftar}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Bayar Hutang',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SHutang"
        component={SHutang}
        options={{
          headerShown: true,
          headerTitle: 'Tambahkan Hutang Baru',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="SCek"
        component={SCek}
        options={{
          headerShown: true,
          headerTitle: 'DETAIL ACARA',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SPenyakit"
        component={SPenyakit}
        options={{
          headerShown: true,
          headerTitle: 'Indeks Penyakit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />

      <Stack.Screen
        name="STentang"
        component={STentang}
        options={{
          headerShown: false,
          headerTitle: 'Tentang',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SHasil"
        component={SHasil}
        options={{
          headerShown: false,
          headerTitle: 'Hasil Analisa',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="DataArtikel"
        component={DataArtikel}
        options={{
          headerShown: true,
          headerTitle: 'Kegiatan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{
          headerShown: false,
          headerTitle: 'Kegiatan Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        }}
      />


      <Stack.Screen
        name="TimAdd"
        component={TimAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tim Baru',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />


      <Stack.Screen
        name="TimList"
        component={TimList}
        options={{
          headerShown: true,
          headerTitle: 'List Tim',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />


      <Stack.Screen
        name="TimDetail"
        component={TimDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Tim',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimAddPemain"
        component={TimAddPemain}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Pemain Tim',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimSet"
        component={TimSet}
        options={{
          headerShown: true,
          headerTitle: 'Pilih SET',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimSetDetail"
        component={TimSetDetail}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      />
      <Stack.Screen
        name="TimMulai"
        component={TimMulai}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      />

      <Stack.Screen
        name="TimHasil"
        component={TimHasil}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      />



    </Stack.Navigator>
  );
}
