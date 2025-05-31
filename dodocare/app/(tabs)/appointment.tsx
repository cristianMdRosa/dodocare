import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

export default function AppointmentScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const handleReserveAppointment = () => {
    if (selectedDate && !appointments.includes(selectedDate)) {
      setAppointments([...appointments, selectedDate]);
      setSelectedDate('');
    }
  };

  const markedDates = {
    ...appointments.reduce((acc, date) => {
      acc[date] = { marked: true, dotColor: '#4CAF50' };
      return acc;
    }, {} as any),
    ...(selectedDate && {
      [selectedDate]: {
        selected: true,
        marked: true,
        selectedColor: '#4CAF50',
      },
    }),
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Llamada de Emergencia 134</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.stepTitle}>Paso 1: Selecciona el Día</Text>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={markedDates}
          minDate={new Date().toISOString().split('T')[0]}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleReserveAppointment}>
          <Text style={styles.submitText}>Reservar Cita</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.stepTitle}>Citas Reservadas</Text>
        {appointments.length === 0 ? (
          <Text style={styles.text}>No hay citas reservadas aún.</Text>
        ) : (
          appointments.map((date, index) => (
            <View key={index} style={styles.appointment}>
              <Text style={styles.text}>📅 {date}</Text>
            </View>
          ))
        )}
      </View>

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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1f2a44',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  appointment: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
