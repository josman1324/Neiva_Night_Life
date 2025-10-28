import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' }} style={styles.avatar} />
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.email}>juan.perez@example.com</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} activeOpacity={0.85}>
          <Text style={styles.actionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#1f2937' }]} activeOpacity={0.85}>
          <Text style={styles.actionText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'flex-start', paddingTop:40, backgroundColor:'#05060a' },
  avatar: { width:110, height:110, borderRadius:60, marginBottom:12 },
  name: { color:'#fff', fontSize:20, fontWeight:'800' },
  email: { color:'#9aa4bf', marginBottom:16 },
  actions: { width:'100%', paddingHorizontal:20, marginTop:12 },
  actionBtn: { backgroundColor:'#6d28d9', paddingVertical:12, borderRadius:10, marginBottom:8, alignItems:'center' },
  actionText: { color:'#fff', fontWeight:'700' },
});
