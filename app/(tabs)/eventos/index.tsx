import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EVENTS = [
  {
    id: 'e1',
    title: 'Festival Nocturno Neiva',
    date: 'Nov 12, 2025',
    place: 'Parque Central',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'e2',
    title: 'Noche de Reggaeton',
    date: 'Nov 20, 2025',
    place: 'Discoteca La Noche',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function EventosScreen() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 12 }}
      data={EVENTS}
      keyExtractor={i => i.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>{item.date} • {item.place}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85}>
              <Text style={styles.buttonText}>Reservar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      ListEmptyComponent={<View style={{padding:20}}><Text>No hay eventos.</Text></View>}
    />
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor:'#071028', borderRadius:12, marginBottom:12, overflow:'hidden' },
  image: { width:'100%', height:160 },
  info: { padding:12 },
  title: { color:'#fff', fontWeight:'700', fontSize:16, marginBottom:6 },
  meta: { color:'#9aa4bf', marginBottom:8 },
  button: { alignSelf:'flex-start', backgroundColor:'#6d28d9', paddingVertical:8, paddingHorizontal:12, borderRadius:8 },
  buttonText: { color:'#fff', fontWeight:'700' },
});
