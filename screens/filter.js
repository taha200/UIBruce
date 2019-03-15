
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Image, Alert } from 'react-native';
import { Avatar, Header, Icon, SearchBar, Divider, Input, Overlay, Rating, Button } from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import GridLayout from 'react-native-layout-grid';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView from 'react-native-maps'


export default class Filter extends Component {
  state = {
    value: 0,
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [0, 1000],
  };
  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values,
    });
  };

  render() {


    return (
      <View style={{ flex: 1, backgroundColor: '#6362b2' }}>
        <ScrollView>
          <Input
            leftIcon={
              <Icon
                name='ios-search'
                type='ionicon'
                color='gray'
              />
            }
            placeholder='What are you looking for'
            shake={true}
            inputContainerStyle={{ width:300, backgroundColor: 'white', borderRadius: 15, borderBottomColor: 'white' }}
            containerStyle={{ marginBottom: 5, height:50, marginTop: 20, alignItems: 'center' }}
          />
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 2, marginTop: 25, flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginBottom: 5, flexBasis: "70%" }}>All Categories</Text>
            <Icon
              containerStyle={{ flexBasis: '30%', marginTop: 5 }}
              name='ios-arrow-dropright-circle'
              type='ionicon'
              color='white'
              size={25}

            />
          </View>
          <View style={{ marginTop: 25, borderBottomColor: 'white', borderBottomWidth: 2, paddingBottom: 10 }}>
            <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Your Budget</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>${this.state.multiSliderValue[0]} </Text>

              <Text style={{ marginRight: 20, fontSize: 20, fontWeight: 'bold', color: 'white' }}>${this.state.multiSliderValue[1]}</Text>
            </View>
            <MultiSlider
              values={[
                this.state.multiSliderValue[0],
                this.state.multiSliderValue[1],
              ]}
              sliderLength={280}
              onValuesChange={this.multiSliderValuesChange}
              min={0}
              max={20000}
              step={30}
              allowOverlap
              snapped
              prefix='$'
              containerStyle={{
                marginLeft: 20
              }}
            />
          </View>
          <View style={{ marginTop: 25, borderBottomColor: 'white', borderBottomWidth: 2, paddingBottom: 10 }}>
            <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Where?</Text>
            <MapView style={{ width: '100%', height: 200, marginTop: 5 }} region={{
              longitude: 40.7128,
              latitude: 74.0060,
              longitudeDelta: 0.1,
              latitudeDelta: 0.1
            }}>

            </MapView>

          </View>
          <View style={{ marginTop: 25, borderBottomColor: 'white', borderBottomWidth: 2, paddingBottom: 10 }}>
            <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>What else?</Text>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
              <View>
                <Icon name='ios-cube'
                  type='ionicon'
                  color='white' />
                <Text style={{ color: 'white' }}>Deliverable</Text>

              </View>
              <View>
                <Icon name='ios-git-compare'
                  type='ionicon'
                  color='white' />
                <Text style={{ color: 'white' }}>Acceptance & Trade</Text>

              </View>
              <View>
                <Icon name='ios-flash'
                  type='ionicon'
                  color='white' />
                <Text style={{ color: 'white' }}>Fast Delivery</Text>

              </View>
            </View>
          </View>
          <View style={{ marginTop: 25, borderBottomColor: 'white', borderBottomWidth: 2, paddingBottom: 10 }}>
            <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Publish date</Text>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>24</Text>
                <Text style={{ color: 'white' }}>hours</Text>

              </View>
              <View>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>7</Text>
                <Text style={{ color: 'white' }}>days</Text>

              </View>
              <View>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>30</Text>
                <Text style={{ color: 'white' }}>days</Text>

              </View>
            </View>
          </View>
          <View style={{ borderBottomColor: 'white', borderBottomWidth: 2, marginTop: 25, flexDirection: 'row', paddingBottom: 10 }}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginBottom: 5, flexBasis: "70%" }}>Sort By Distance</Text>
            <Icon
              containerStyle={{ flexBasis: '30%', marginTop: 5 }}
              name='ios-arrow-dropright-circle'
              type='ionicon'
              color='white'
              size={25}

            /></View>
          <View style={{ borderBottomColor: 'white', height: 40, borderBottomWidth: 2, marginTop: 25, paddingBottom: 10 }}>
          </View>

        </ScrollView>
        <View style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', left: 0, right: 0, bottom: 0, height: 60, width: '100%' }}>
          <View style={{ alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 30 }}>Reset Filters</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 30 }}>Apply Filters</Text>
          </View>
        </View>

      </View>
    );
  }
}