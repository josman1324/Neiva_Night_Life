import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SectionTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 8 },
  title: { fontSize: 18, fontWeight: '800', color: '#0f172a' },
});
