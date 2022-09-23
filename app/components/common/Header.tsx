import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {DrawerScreenProps} from '@react-navigation/drawer';
import type {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import RootStackParamList from '../navigation/RootStackParam';
type ProfileScreenNavigationProp = CompositeScreenProps<
  DrawerScreenProps<RootStackParamList>,
  StackScreenProps<RootStackParamList>
>;

export type Props = {
  title: string;
  backShown: boolean;
  notiShown: boolean;
  menuShown: boolean;
  isPopToTop: boolean;
};

const Header: React.FC<Props> = ({
  title = '',
  backShown = false,
  notiShown = false,
  menuShown = false,
  isPopToTop = false,
}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {backShown && (
          <TouchableOpacity
            style={styles.btBack}
            onPress={() => {
              if (isPopToTop) {
                navigation.dispatch(StackActions.popToTop());
              }
            }}>
            <Icon name="chevron-back-outline" size={32} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
  },
  body: {
    flex: 1,
  },
  btBack: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    marginLeft: 20,
    height: 40,
    width: 40,
  },
});
