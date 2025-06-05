import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import Background from '../assets/svg/Background';

export default function Register() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60} // Ajusta este valor según tu header
    >
      <View style={{ flex: 1 }}>
        <Background style={StyleSheet.absoluteFill} />

        <View style={styles.container}>
          <Image 
            source={require('@/assets/images/logododo.jpeg')} 
            style={styles.logo}
            resizeMode="cover"
          />

          <Text style={styles.title}>Crear Cuenta</Text>

          {/* Campos del formulario */}
          <TextInput
            placeholder="Nombre"
            style={styles.input}
            placeholderTextColor="#999"
          />
          
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
          <TouchableOpacity style={styles.backButton}
            onPress={() => router.push('/login-form')}>
            <Text style={styles.backButtonText}>¿Ya tienes cuenta? Inicia Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.replace('/login')} // Cambiado a replace
          >
            <Text style={styles.backButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    height: 280,
    marginBottom: 80,
    alignSelf: 'flex-start',
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});