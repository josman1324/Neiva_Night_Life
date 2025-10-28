import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlaceCard({ item, onPress, compact=false }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={[styles.card, compact && styles.cardCompact]}>
      <Image source={{ uri: item.imagen }} style={[styles.image, compact && styles.imageCompact]} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{item.nombre}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>{item.tipo} • {item.direccion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    flex: 1,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 4,
  },
  cardCompact: {
    marginHorizontal: 6,
  },
  image: {
    width: '100%',
    height: 120,
  },
  imageCompact: {
    height: 100,
  },
  info: {
    padding: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 4,
    color: '#6b7280',
    fontSize: 12,
  },
});
