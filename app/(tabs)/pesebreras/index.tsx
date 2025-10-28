import { LUGARES } from '@/app/data/lugares';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PesebrerasScreen() {
  const items = LUGARES.filter(l => l.tipo === 'Pesebrera');
  return (
    <FlatList
      contentContainerStyle={{ padding: 12 }}
      data={items}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
         <Link href={`/lugares/${item.id}?from=pesebreras`} asChild>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: item.imagen }} style={styles.image} />
          <View style={{ padding: 8 }}>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.subtitle}>{item.direccion} • {item.horario}</Text>
          </View>
        </TouchableOpacity>
        </Link>
      )}
      ListEmptyComponent={<View style={{padding:20}}><Text>No hay pesebreras registradas.</Text></View>}
    />
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor:'#0b1220', borderRadius:10, marginBottom:12, overflow:'hidden' },
  image: { height:120, width:'100%' },
  title: { color:'#fff', fontWeight:'700', paddingBottom:4, fontSize:16 },
  subtitle: { color:'#9ca3af', fontSize:13 },
});
