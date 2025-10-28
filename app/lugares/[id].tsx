import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Lugar } from '@/app/data/lugares';
import { LUGARES } from '@/app/data/lugares';


export default function DetalleScreen() {

  const params = useLocalSearchParams();
  const id = params.id as string | undefined;
  const from = params.from as string | undefined;
  const router = useRouter();
  const navigation = useNavigation();

  const handleBack = () => {
    // 1) Prefer native navigation back if available
    // 2) Otherwise try router.back() which attempts to pop the history
    // 3) If still no history, fallback to the lugares tab route so we don't land en inicio
    // If the route includes a `from` param, navigate explicitly to that tab first
    const mapping: Record<string, string> = {
      lugares: '/(tabs)/lugares',
      discotecas: '/(tabs)/discotecas',
      pesebreras: '/(tabs)/pesebreras',
      eventos: '/(tabs)/eventos',
      perfil: '/(tabs)/perfil',
      home: '/(tabs)/home',
    };

    if (from && mapping[from]) {
      // @ts-ignore - allowed path string
      router.push(mapping[from]);
      return;
    }

    // Prefer native navigation back if available
    // @ts-ignore - useNavigation type can be broad in this project
    if (navigation?.canGoBack && navigation.canGoBack()) {
      // @ts-ignore
      navigation.goBack();
      return;
    }

    // Try router.back() — this will pop the history if any
    try {
      router.back();
      return;
    } catch {
      // ignore
    }

    // Final fallback: go to the lugares tab route
    // @ts-ignore - allowed path string
    router.push('/(tabs)/lugares');
  };
  const lugar: Lugar | undefined = LUGARES.find((l) => l.id === id);
  if (!lugar) return <Text>No encontrado</Text>;

  const onShare = async () => {
    try {
      await Share.share({
        message: `${lugar.nombre} — ${lugar.direccion} — Horario: ${lugar.horario}`,
      });
    } catch {
      Alert.alert('Error', 'No se pudo compartir');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles3.container} contentContainerStyle={{ paddingBottom: 110 }}>
      <View style={styles3.hero}>
        <Image source={{ uri: lugar.imagen }} style={styles3.image} accessibilityIgnoresInvertColors />
        <View style={styles3.heroOverlay} />
        <View style={styles3.heroText}>
          <Text style={styles3.title}>{lugar.nombre}</Text>
          <Text style={styles3.type}>{lugar.tipo}</Text>
        </View>
      </View>
      <View style={styles3.content}>
        <Text style={styles3.sectionTitle}>Información</Text>
        <Text style={styles3.text}>Dirección: {lugar.direccion}</Text>
        <Text style={styles3.text}>Horario: {lugar.horario}</Text>
        <Text style={styles3.description}>{lugar.descripcion}</Text>
        <View style={styles3.actionsRow}>
          <TouchableOpacity style={[styles3.button, styles3.secondaryButton]} onPress={() => {}} accessibilityRole="button">
            <Text style={[styles3.buttonText, styles3.secondaryButtonText]}>Ver en mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles3.button} onPress={onShare} accessibilityRole="button" accessibilityLabel="Compartir lugar">
            <Text style={styles3.buttonText}>Compartir</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

      <View style={styles3.footer} pointerEvents="box-none">
        <TouchableOpacity
          style={styles3.backButton}
          onPress={handleBack}
          accessibilityRole="button"
          accessibilityLabel="Volver"
        >
          <Text style={styles3.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles3 = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFBFF' },
  hero: { height: 260, position: 'relative' },
  image: { width: '100%', height: '100%' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(6, 30, 60, 0.35)' },
  heroText: { position: 'absolute', left: 16, bottom: 16 },
  content: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  title: { fontSize: 20, fontWeight: '800', color: '#fff', marginBottom: 4 },
  type: { color: '#C7E5FF', fontWeight: '600', marginBottom: 8 },
  text: { color: '#475569', marginBottom: 6 },
  description: { color: '#334155', lineHeight: 20, marginBottom: 16 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { backgroundColor: '#0b548f', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, flex: 1, alignItems: 'center' },
  secondaryButton: { backgroundColor: '#E6F2FF', marginRight: 8 },
  buttonText: { color: 'white', fontWeight: '700' },
  secondaryButtonText: { color: '#0b548f' },
  footer: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 24,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#0b548f',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 999,
    width: '100%',
    maxWidth: 480,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 6,
  },
  backButtonText: { color: '#fff', fontWeight: '700' },
});
