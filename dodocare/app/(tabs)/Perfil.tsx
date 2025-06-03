import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Bienvenida con ícono */}
      <View style={styles.welcomeCard}>
        <Image
          source={require('@/assets/images/WelcomeIcon.png')}
          style={styles.welcomeIcon}
        />
        <Text style={styles.name}>Javier Alejandro{"\n"}Rivas Perla</Text>
      </View>

      {/* Sección: Datos Importantes */}
      <View style={styles.card}>
        <SectionHeader title="Datos Importantes" />
        <InfoRow label="Dui" value="12345678-9" />
        <InfoRow label="Fecha de Nacimiento" value="10/04/2001" />
        <InfoRow label="Sexo" value="Masculino" />
        <EditIcon />
      </View>

      {/* Sección: Datos Complementarios */}
      <View style={styles.card}>
        <SectionHeader title="Datos Complementarios" />
        <InfoRow label="Peso" value="176.37 Libras" />
        <InfoRow label="Altura" value="1.82 Metros" />
        <InfoRow label="Tipo de Sangre" value="O+" />
        <InfoRow label="Dirección" value="Colonia Milagro de la Paz" />
        <InfoRow label="Teléfono" value="7682-8282" />
        <EditIcon />
      </View>

      {/* Sección: Información Importante */}
      <View style={styles.card}>
        <SectionHeader title="Información Importante" />
        <InfoRow label="Alergias" value="(no proporcionado)" />
        <InfoRow label="Medicamentos" value="(no proporcionado)" />
        <InfoRow label="Condición Médica" value="(no proporcionado)" />
        <EditIcon />
      </View>

      {/* Sección: Contacto de Emergencia */}
      <View style={styles.card}>
        <SectionHeader title="Contacto de Emergencia" />
        <InfoRow label="Nombre" value="(no proporcionado)" />
        <InfoRow label="Parentesco" value="(no proporcionado)" />
        <InfoRow label="Tipo de Sangre" value="(no proporcionado)" />
        <InfoRow label="Teléfono" value="7682-8282" />
        <EditIcon />
      </View>
    </ScrollView>
  );
}

// Componente de fila de información
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

// Componente de encabezado de sección
const SectionHeader = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

// Componente del ícono de edición
const EditIcon = () => (
  <TouchableOpacity style={styles.editIcon}>
    <Ionicons name="create-outline" size={18} color="#1f2a44" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2a44',
    padding: 16,
  },
  welcomeCard: {
    backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingVertical: 40,       // ⬅️ Más alto
  paddingHorizontal: 24,     // ⬅️ Más ancho
  alignItems: 'center',
  marginBottom: 24,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  },
  welcomeIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  name: {
      fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#1f2a44',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
    color: '#1f2a44',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  label: {
    fontWeight: '500',
    color: '#333',
  },
  value: {
    color: '#555',
  },
  editIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
