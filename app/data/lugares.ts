export type Lugar = {
  id: string;
  nombre: string;
  tipo: 'Discoteca' | 'Bar' | 'Pesebrera' | string;
  direccion: string;
  horario: string;
  imagen: string;
  descripcion?: string;
};

export const LUGARES: Lugar[] = [
  {
    id: '1',
    nombre: 'Discoteca La Noche Neivana',
    tipo: 'Discoteca',
    direccion: 'Cra 5 #10-20, Neiva',
    horario: '8:00 PM - 3:00 AM',
    imagen: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc',
    descripcion: 'Ambiente moderno con música en vivo, luces LED y zona VIP exclusiva.',
  },
  {
    id: '2',
    nombre: 'Bar El Rincón Huilense',
    tipo: 'Bar',
    direccion: 'Calle 9 #4-12, Neiva',
    horario: '6:00 PM - 2:00 AM',
    imagen: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20',
    descripcion: 'Espacio acogedor con cocteles típicos y decoración regional huilense.',
  },
  {
    id: '3',
    nombre: 'Pesebrera La Herradura',
    tipo: 'Pesebrera',
    direccion: 'Km 3 vía al Caguán',
    horario: '5:00 PM - 12:00 AM',
    imagen: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439',
    descripcion: 'Lugar campestre con presentaciones de caballos y comida tradicional.',
  },
];
