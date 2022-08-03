import {Directions} from 'react-native';

const Constant = {
  screen: {
    width: Directions.get('window').width,
    height: Directions.get('window').height,
  },
  screenName: {
    Home: 'Home',
    Exchange: 'Exchange',
    Setting: 'Setting',
  },
  key: {},
  icon: {},
  fonts: {},
  cardType: {
    mastercard: 'mastercard',
    visa: 'visa',
    paypal: 'paypal',
    amex: 'amex',
    discover: 'discover',
    jcb: 'jcb',
    unionpay: 'unionpay',
    diners: 'diners',
  },
  color: {},
};

export default Constant;
