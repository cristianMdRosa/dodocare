import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DisabilitiesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Botón de emergencia */}
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Llamada de Emergencia 134</Text>
      </TouchableOpacity>

      {/* Tarjeta 1 */}
      <View style={styles.card}>
        <Text style={styles.title}>Incapacidad Médica</Text>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>Javier Alejandro Rivas</Text>

        <Text style={styles.label}>Diagnóstico:</Text>
        <Text style={styles.text}>
          Esguince de ligamento derecho. Se recomienda reposo por 10 días a partir del martes.
        </Text>

        <Text style={styles.label}>Médico tratante:</Text>
        <Text style={styles.text}>Dr. Juan Morales Rivera</Text>
        <Text style={styles.text}>Cédula Profesional: 6543210</Text>
      </View>

      {/* Tarjeta 2 */}
      <View style={styles.card}>
        <Text style={styles.title}>Incapacidad Médica</Text>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>Alejandro Rivas</Text>

        <Text style={styles.label}>Diagnóstico:</Text>
        <Text style={styles.text}>
          Fractura en la pierna izquierda. Requiere reposo absoluto por 30 días desde el lunes.
        </Text>

        <Text style={styles.label}>Seguimiento:</Text>
        <Text style={styles.text}>Revisión médica semanal hasta recuperación total.</Text>

        <Text style={styles.label}>Médico tratante:</Text>
        <Text style={styles.text}>Dra. Ana López Martínez</Text>
        <Text style={styles.text}>Cédula Profesional: 1234567</Text>
      </View>

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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1f2a44',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
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
