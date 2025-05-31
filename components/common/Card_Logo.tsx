import { View, StyleSheet, Image } from 'react-native';

export default function Card_Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 290,
  }
});
