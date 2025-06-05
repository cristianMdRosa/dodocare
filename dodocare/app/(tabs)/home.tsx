import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import Background from '../../assets/svg/Background2';

export default function Home() {
  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <View style={{ flex: 1 }}>
      <Background style={StyleSheet.absoluteFill} />
      <View style={styles.container}>
        <Image 
          source={require('@/assets/images/logododo.jpeg')} 
          style={styles.logo}
          resizeMode="cover"
        />

        {/* Bienvenida con ícono */}
        <View style={styles.welcomeCard}>
          <Image
            source={require('@/assets/images/WelcomeIcon.png')} //Usa aquí tu ícono
            style={styles.welcomeIcon}
          />
          <Text style={styles.welcomeText}>
            ¡Bienvenido{'\n'}Invitado!
          </Text>
        </View>

        <Text style={styles.subTitle}>Servicios</Text>

        <View style={styles.grid}>
          {[
            'Agendar cita',
            'Historial médico',
            'Directorio médico',
            'Recetas médicas',
            'Incapacidades',
            'Información del hospital',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.serviceBox}>
              <Text style={styles.boxText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>SALIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 120,
    marginBottom: 20,
    alignSelf: 'flex-start',
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '#ffffff',
  },

  // Nuevo estilo para tarjeta de bienvenida
  welcomeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  welcomeIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 22,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  serviceBox: {
    backgroundColor: '#fff',
    width: 140,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  boxText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2a44',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
