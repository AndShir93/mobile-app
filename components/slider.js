import React from "react";
import { createStore } from 'redux';
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { connect } from 'react-redux';
import { setCurrent, localSlider } from "../redux/actions";
import initialState,{localImages} from '../redux/initialState';
import reducers from '../redux/reducers';

const store = createStore(reducers, initialState());

export const Slider = (props) => {

  function next(){
    i++
  }
  return (
    <View>
      <Text>This is slider!</Text>
      <View style={styles.sliderWrapper}>
        <Image style={styles.sliderWrapper__image} source={ require('../images/1.jpg') }/> 
      </View>
      <View style={styles.sliderWrapper__buttons}>
        <Button
          title="-"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Поменять"
          onPress={() => next()}
        />
        <Button
          title="+"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    width: 304,
    height: 204,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 4
  },
  sliderWrapper__buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20 
  },
  sliderWrapper__image: {
    width: 300,
    height: 200
  }
});
