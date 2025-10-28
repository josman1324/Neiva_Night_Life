import { LUGARES } from '@/app/data/lugares';
import Header from '@/components/Header';
import PlaceCard from '@/components/PlaceCard';
import SectionTitle from '@/components/SectionTitle';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen(){
  const router = useRouter();
  const destacados = LUGARES.slice(0,3);
  const discotecas = LUGARES.filter(l=> l.tipo === 'Discoteca');
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header title="Bienvenido a NeivaNightlife" subtitle="Los mejores planes nocturnos cerca de ti" />
            <View style={styles.section}>
              <SectionTitle>Destacados</SectionTitle>
              <FlatList horizontal data={destacados} keyExtractor={i=>i.id} renderItem={({item})=> <PlaceCard item={item} onPress={()=> router.push('/(tabs)/lugares')} compact/>} showsHorizontalScrollIndicator={false} />
            </View>
            <SectionTitle>Discotecas populares</SectionTitle>
            <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
              <FlatList horizontal data={discotecas} keyExtractor={i=>i.id} renderItem={({item})=> <PlaceCard item={item} onPress={()=> router.push('/(tabs)/discotecas')} compact/>} showsHorizontalScrollIndicator={false} />
            </View>
            <SectionTitle>Explora todos los lugares</SectionTitle>
          </>
        }
        data={LUGARES}
        keyExtractor={i=>i.id}
        renderItem={({item})=> <PlaceCard item={item} onPress={()=> router.push('/(tabs)/lugares')} />}
        contentContainerStyle={{ padding: 12, paddingBottom: 120 }}
      />
      <TouchableOpacity style={styles.cta} activeOpacity={0.9} onPress={() => router.push('/(tabs)/lugares')}>
        <Text style={styles.ctaText}>Explorar ahora</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#F8FAFC' },
  section: { marginTop: 12, paddingHorizontal: 8 },
  cta: { position:'absolute', right:16, bottom:24, backgroundColor:'#0369a1', paddingVertical:12, paddingHorizontal:20, borderRadius:14, shadowColor:'#0369a1', shadowOpacity:0.18, elevation:6 },
  ctaText: { color:'#fff', fontWeight:'800' }
});
