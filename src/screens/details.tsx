import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IData from '../interfaces/IData';

const Details = ({ route }) => {
  const { navigate } = useNavigation();
  

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView />
      <View style={styles.containerOthers}>
        <Text style={styles.title}>Dados do projeto</Text>
      </View>
      <View style={styles.containerInputs}>
        <Text style={styles.label}>Código: <Text style={styles.labelBold}>{route.params.projeto.id}</Text></Text>
        <Text style={styles.label}>Nome: <Text style={styles.labelBold}>{route.params.projeto.name}</Text></Text>        
        <Text style={styles.label}>Linguagem: <Text style={styles.labelBold}>{route.params.projeto.language}</Text></Text>
        <Text style={styles.label}> ------------------------------------------ </Text>
        <Text style={styles.title}>Dados do proprietário</Text>
        <Text style={styles.label}> ------------------------------------------ </Text>
        <Image source={{ uri: route.params.projeto.owner?.avatar_url }} style={styles.image} />
        <Text style={styles.label}>URL: <Text style={styles.labelBold}>{route.params.projeto.owner?.url}</Text></Text>
      </View>
      <View style={styles.containerOthers}>
        <Text style={styles.label}> ------------------------------------------ </Text>
      </View>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginTop: 8,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  containerOthers: {
    flex: 1,
    justifyContent: 'center',
  },
  containerInputs: {
    flex: 2,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  label: {
    color: 'black',
    textAlign: 'center',
  },
  labelBold: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
      width: 120,
      height: 120,
      borderWidth: 3,
      borderColor: 'grey',
      borderRadius: 60,
      alignSelf: 'center',
  },
  paragraph: {
    margin: 30,    
    textAlign: 'center',
  },
});