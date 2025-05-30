import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Background from '../assets/svg/Background'; // Ajusta esta ruta si es diferente

export default function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Background style={StyleSheet.absoluteFill} />

      <View style={styles.container}>
        <Image 
          source={require('@/assets/images/logododo.jpeg')} 
          style={styles.logo}
          resizeMode="cover"
        />

        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.secondaryButton}
          onPress={() => router.push('/register')}>
          <Text style={styles.secondaryButtonText}>¿Aún no tienes cuenta? Crear Cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 240,
    height: 340,
    marginBottom: 35,
    alignSelf: 'flex-start',
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    color: '#ffff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#ffff',
    textDecorationLine: 'underline',
  },
});
