import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isAndroid = Platform.OS === 'android';
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  const activeTint = Colors[theme].tabIconSelected ?? '#fff';
  const inactiveTint = Colors[theme].tabIconDefault ?? '#b3b3b3';
  const barBackground = theme === 'dark' ? '#000' : '#0f172a';


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeTint,
        tabBarInactiveTintColor: inactiveTint,
        tabBarStyle: {
          backgroundColor: barBackground,
          borderTopWidth: 0,
          height: isAndroid ? 70 : 78,
          paddingBottom: isAndroid ? 10 : 18,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
        },
      }}>

      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color ?? activeTint} />
          ),
        }}
      />
      <Tabs.Screen
        name="discotecas/index"
        options={{
          title: 'Discotecas',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="music.note" color={color ?? activeTint} />
          ),
        }}
      />
      <Tabs.Screen
        name="pesebreras/index"
        options={{
          title: 'Pesebreras',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="hare.fill" color={color ?? activeTint} />
          ),
        }}
      />
      <Tabs.Screen
        name="eventos/index"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="calendar" color={color ?? activeTint} />
          ),
        }}
      />
      <Tabs.Screen
        name="lugares/index"
        options={{
          title: 'Lugares',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="map.fill" color={color ?? activeTint} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="person.circle.fill" color={color ?? activeTint} />
          ),
        }}
      />

    </Tabs>
  );
}
