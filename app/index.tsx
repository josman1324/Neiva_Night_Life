import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen(){
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1200&q=80'}} style={styles.bg} imageStyle={{opacity:0.9}}>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.logo}>NeivaNightlife</Text>
          <Text style={styles.tag}>Descubre la vida nocturna de Neiva</Text>
          <TouchableOpacity style={styles.primary} onPress={() => router.push('/(tabs)/home')} activeOpacity={0.9}>
            <Text style={styles.primaryText}>Explorar sin registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ghost} onPress={() => { /* placeholder for Google Sign-In */ }} activeOpacity={0.9}>
            <Text style={styles.ghostText}>Continuar con Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#05060a' },
  bg: { flex:1, justifyContent:'center' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor:'rgba(2,6,23,0.45)' },
  content: { alignItems:'center', paddingHorizontal:24 },
  logo: { color:'#fff', fontSize:34, fontWeight:'900', marginBottom:8 },
  tag: { color:'#cbd5e1', marginBottom:24 },
  primary: { backgroundColor:'#0ea5e9', paddingVertical:14, paddingHorizontal:28, borderRadius:12, marginBottom:12 },
  primaryText: { color:'#fff', fontWeight:'800' },
  ghost: { borderColor:'#fff', borderWidth:1, paddingVertical:12, paddingHorizontal:26, borderRadius:12 },
  ghostText: { color:'#fff' }
});
