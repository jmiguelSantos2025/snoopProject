import { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { router} from 'expo-router';

export default function FirstScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/SecondScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/Logo.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    backgroundColor:"#F3D3FF"
  },
  image: {
    width: '60%',
    height: '60%',
  },
});
