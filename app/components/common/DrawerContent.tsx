import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  DrawerActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import RootStackParamList from '../navigation/RootStackParam';

const menuOptions = [
  {
    title: 'Home',
  },
  {
    title: 'Exchange',
    screen: 'Exchange',
  },
  {
    title: 'Setting',
    screen: 'Setting',
  },
  {
    title: 'Logout',
  },
];

const DrawerContent = () => {
  const navigation = useNavigation();

  const onTapMenuOption = (value, index) => {
    switch (index) {
      case 4:
        // AppManager.shared.currentUser = null
        //             StorageManager.setData(Constant.keys.currentUser, null)
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'Login'}],
        // });
        break;
      case 0:
        navigation.dispatch(DrawerActions.closeDrawer());
        break;
      default:
        navigation.dispatch(
          StackActions.push(value.screen, {
            title: value?.title,
          }),
        );
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            ...styles.contentView,
            marginTop: Platform.OS == 'android' ? 50 : 0,
          }}>
          {/* <Text style={styles.userNameText}>User Name</Text> */}
          {menuOptions.map((value, index) => (
            <TouchableOpacity
              key={value.title}
              onPress={() => onTapMenuOption(value, index)}>
              <Text style={styles.optionText}>{value.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentView: {
    flex: 1,
    marginLeft: 34,
  },
  userNameText: {
    fontSize: 22,
    // fontFamily: Constant.fonts.notoSansJPBold,
    color: 'black',
    marginBottom: 60,
  },
  optionText: {
    fontSize: 16,
    // fontFamily: Constant.fonts.notoSansJPBold,
    color: '#7F8592',
    // marginBottom: Util.isAndroid() ? 16 : 22,
    includeFontPadding: false,
  },
  version: {
    fontSize: 10,
    // fontFamily: Constant.fonts.notoSansJPBold,
    color: '#7F8592',
    marginLeft: 34,
    marginBottom: 26,
  },
});
