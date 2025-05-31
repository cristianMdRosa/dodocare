import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MedicalPrescriptionsScreen() {
  const navigation = useNavigation();

  const prescriptions = [
    {
      doctor: 'Dr. Alexis Benitez Hernandez',
      medication: 'Amoxicilina 500 mg',
      instructions: 'Tomar 1 cápsula dos veces al día durante 7 días.',
      image: require('../../assets/images/Dr1.webp'),
    },
    {
      doctor: 'Dr. Gilberto Edmundo de Evián',
      medication: '',
      instructions:
        'Tomar 1 tableta diaria vía oral durante el embarazo, hasta el próximo primer trimestre.',
      image: require('../../assets/images/Dr2.jpg'),
    },
    {
      doctor: 'Dr. Enrique Guerrero Perla',
      medication: 'Cefalexina 500 mg',
      instructions:
        'Tomar una tableta cada 8 horas durante 7 días para infecciones postoperatorias.',
      image: require('../../assets/images/Dr3.jpg'),
    },
    {
      doctor: 'Dra. Jackeline Lissbeth Flores Hernández',
      medication: 'Metronidazol vía oral',
      instructions:
        'Tomar una tableta cada ocho horas por cinco días para tratar infección de bacterias vaginales.',
      image: require('../../assets/images/Dr2.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Botón de emergencia */}
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Llamada de Emergencia 134</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Prescripción Médica</Text>

      {/* Lista de recetas */}
      {prescriptions.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Image source={item.image} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Médico:</Text>
              <Text style={styles.text}>{item.doctor}</Text>
            </View>
          </View>

          {item.medication ? (
            <>
              <Text style={styles.label}>Medicamento:</Text>
              <Text style={styles.text}>{item.medication}</Text>
            </>
          ) : null}

          <Text style={styles.label}>Instrucciones:</Text>
          <Text style={styles.text}>{item.instructions}</Text>
        </View>
      ))}

      {/* Botón Volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2a44',
    padding: 16,
  },
  emergencyButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  emergencyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  label: {
    fontWeight: 'bold',
    color: '#1f2a44',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
