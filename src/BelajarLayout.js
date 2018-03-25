import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30 }} >Pendidikan Teknik Informatika</Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text> A </Text></View>
        <View style={styles.button}><Text> C </Text></View>
        <View style={styles.button}><Text> d </Text></View>
        <View style={styles.button}><Text> e </Text></View>
      </View>
      <View style={styles.box4}>
        <View style={styles.button}><Text> h </Text></View>
        <View style={styles.button}><Text> i </Text></View>
        <View style={styles.button}><Text> j </Text></View>
        <View style={styles.button}><Text> l </Text></View>
      </View>
      <View style={styles.box6}>
        <View style={styles.button}><Text> h </Text></View>
        <View style={styles.button}><Text> i </Text></View>
        <View style={styles.button}><Text> j </Text></View>
        <View style={styles.button}><Text> l </Text></View>
      </View>
      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}>#JaenKuliahdiPTI</Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#80C6FF',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: '#1766A6',
  },
  box2: {
    flex: 1,                      //ukuran box
    backgroundColor: '#2196F3',
    flexDirection: 'column',          //column yang artinya kebawah
    justifyContent: 'space-between',  //ada space diantara
    alignItems: 'center'              //pas di tengah-tengah layar hp
  },
  box3: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#80D7FF',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',    //space mengelilingi box
    alignItems: 'center',
    flexDirection: 'row'               //row kesamping
  },
  box4: {
    flex: 1,
    backgroundColor: '#80D7FF',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box6: {
    flex: 1,
    backgroundColor: '#80D7FF',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#0E3F66',
    margin: 10
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 30
  }
});
