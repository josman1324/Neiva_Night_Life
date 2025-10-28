import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Header({ title, subtitle }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1200&q=80' }}
      style={styles.banner}
      imageStyle={{ borderBottomLeftRadius: 18, borderBottomRightRadius: 18 }}
      blurRadius={1}
    >
      <View style={styles.overlay} />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 260,
    padding: 20,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(7, 10, 18, 0.35)',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: '#e2e8f0',
    marginTop: 6,
  },
});
