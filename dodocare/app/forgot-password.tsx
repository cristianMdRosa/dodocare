import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      
      <Text style={styles.subtitle}>
        Ingresa tu correo electrónico para recibir instrucciones
      </Text>

      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Instrucciones</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backLink}
        onPress={() => router.back()}
      >
        <Text style={styles.backLinkText}>Volver al login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2a44',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  backLinkText: {
    color: '#4CAF50',
    fontSize: 16,
  },
});