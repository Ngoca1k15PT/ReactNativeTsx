import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootStackParamList from '../navigation/RootStackParam';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';

type ProfileScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: ProfileScreenNavigationProp) => {
  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        {/* <TouchableOpacity
          style={{
            height: 60,
            width: 200,
            backgroundColor: 'red',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Exchange', {id: 'aa'})}>
          <Text>go</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
