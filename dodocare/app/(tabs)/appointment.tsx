import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const doctors = [
  {
    name: 'Dr. Alexis Benitez Hernandez',
    specialty: 'Neumólogo Internista',
    image: require('../../assets/images/Dr1.webp'),
  },
  {
    name: 'Dr. Gilberto Edmundo de Evián',
    specialty: 'Ginecólogo-Obstetra',
    image: require('../../assets/images/Dr2.jpg'),
  },
  {
    name: 'Dr. Enrique Guerrero Perla',
    specialty: 'Cirujano General',
    image: require('../../assets/images/Dr3.jpg'),
  },
  {
    name: 'Dra. Jackeline Lissbeth Flores Hernández',
    specialty: 'Ginecología Obstetra',
    image: require('../../assets/images/Dr2.jpg'),
  },
];

export default function AppointmentScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [confirmedAppointments, setConfirmedAppointments] = useState<
    { doctor: string; date: string }[]
  >([]);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const handleConfirm = () => {
    if (selectedDoctor && selectedDate) {
      setConfirmedAppointments((prev) => [
        ...prev,
        { doctor: selectedDoctor.name, date: selectedDate },
      ]);
      setSelectedDoctor(null);
      setSelectedDate('');
      setSearch('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Llamada de Emergencia 134</Text>
      </TouchableOpacity>

      {/* Paso 1: Selección del doctor */}
      <View style={styles.card}>
        <Text style={styles.stepTitle}>Paso 1: Selecciona al Especialista</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar por nombre o especialidad..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
        {filteredDoctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.doctorCard,
              selectedDoctor?.name === doctor.name && styles.selectedDoctor,
            ]}
            onPress={() => setSelectedDoctor(doctor)}
          >
            <Image source={doctor.image} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{doctor.name}</Text>
              <Text style={styles.specialty}>{doctor.specialty}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Paso 2: Selección de fecha */}
      {selectedDoctor && (
        <View style={styles.card}>
          <Text style={styles.stepTitle}>Paso 2: Selecciona el Día</Text>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              ...(selectedDate && {
                [selectedDate]: {
                  selected: true,
                  selectedColor: '#4CAF50',
                },
              }),
            }}
            minDate={new Date().toISOString().split('T')[0]}
          />
        </View>
      )}

      {/* Confirmación */}
      {selectedDoctor && selectedDate && (
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmText}>Solicitar Cita</Text>
        </TouchableOpacity>
      )}

      {/* Lista de citas confirmadas */}
      {confirmedAppointments.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.stepTitle}>✅ Citas Confirmadas</Text>
          {confirmedAppointments.map((appt, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text style={styles.text}>
                Cita con <Text style={{ fontWeight: 'bold' }}>{appt.doctor}</Text>
              </Text>
              <Text style={styles.text}>
                Fecha: <Text style={{ fontWeight: 'bold' }}>{appt.date}</Text>
              </Text>
            </View>
          ))}
        </View>
      )}

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
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1f2a44',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  selectedDoctor: {
    backgroundColor: '#c8e6c9',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2a44',
  },
  specialty: {
    fontSize: 14,
    color: '#555',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

