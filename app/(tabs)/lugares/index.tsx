// ===== app/lugares/index.tsx =====
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Lugar } from '@/app/data/lugares';
import { LUGARES } from '@/app/data/lugares';



function LugarCard({ lugar }: { lugar: Lugar }) {
	return (
		<Link href={`/lugares/${lugar.id}?from=lugares`} asChild>
			<TouchableOpacity activeOpacity={0.85} style={stylesCard.card} accessible accessibilityRole="button" accessibilityLabel={`Ir a detalles de ${lugar.nombre}`}>
			<Image source={{ uri: lugar.imagen }} style={stylesCard.image} />
			<View style={stylesCard.info}>
				<View style={stylesCard.headerRow}>
					<Text style={stylesCard.name}>{lugar.nombre}</Text>
					<View style={stylesCard.badge}><Text style={stylesCard.badgeText}>{lugar.tipo}</Text></View>
				</View>
				<Text style={stylesCard.address}>{lugar.direccion}</Text>
			</View>
			</TouchableOpacity>
		</Link>
	);
}


export default function LugaresScreen() {
const [filtro, setFiltro] = useState('Todos');

const filtrados: Lugar[] = filtro === 'Todos' ? LUGARES : LUGARES.filter((l: Lugar) => l.tipo === filtro);

return (
	<View style={styles.container}>
		<Text style={styles.title}>Lugares Nocturnos</Text>
		<View style={styles.filters}>
			{['Todos','Discoteca', 'Bar', 'Pesebrera'].map(tipo => (
				<TouchableOpacity
					key={tipo}
					style={[styles.filterButton, filtro === tipo && styles.filterButtonActive]}
					onPress={() => setFiltro(tipo)}
				>
					<Text style={[styles.filterText, filtro === tipo && styles.filterTextActive]}>{tipo}</Text>
				</TouchableOpacity>
			))}
		</View>
		<FlatList
			data={filtrados}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <LugarCard lugar={item} />}
			contentContainerStyle={{ paddingBottom: 20 }}
		/>
	</View>
);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8FAFC',
		padding: 16,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#1E293B',
		marginBottom: 12,
		textAlign: 'center',
	},
	filters: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 16,
	},
	filterButton: {
		backgroundColor: '#E0E7EF',
		paddingVertical: 6,
		paddingHorizontal: 14,
		borderRadius: 12,
		marginHorizontal: 4,
	},
	filterButtonActive: {
		backgroundColor: '#3B82F6',
	},
	filterText: {
		color: '#475569',
		fontWeight: '500',
	},
	filterTextActive: {
		color: 'white',
	},
});

const stylesCard = StyleSheet.create({
	card: {
		flexDirection: 'row',
			backgroundColor: '#fff',
		borderRadius: 14,
		marginBottom: 14,
		elevation: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		overflow: 'hidden',
	},
		image: {
			width: 96,
			height: 96,
			borderTopLeftRadius: 14,
			borderBottomLeftRadius: 14,
		},
	info: {
		flex: 1,
		padding: 12,
		justifyContent: 'center',
	},
		headerRow: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	name: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#1E293B',
		marginBottom: 4,
	},
		badge: {
			backgroundColor: '#d9e1f9ff',
			paddingHorizontal: 8,
			paddingVertical: 4,
			borderRadius: 12,
		},
		badgeText: {
			color: '#2e2789ff',
			fontWeight: '700',
			fontSize: 12,
		},
	type: {
		fontSize: 14,
		color: '#3B82F6',
		marginBottom: 2,
	},
	address: {
		fontSize: 13,
		color: '#475569',
	},
});

