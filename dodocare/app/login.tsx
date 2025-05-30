import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Logo redondo */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/logododo.jpeg')} 
          style={styles.logo}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.welcomeText}>¡Bienvenido/a!</Text>

      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={() => router.push('/login-form')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity 
  style={styles.guestButton}
  onPress={() => router.replace('/(tabs)/home')}
>
  <Text style={styles.guestButtonText}>Ingresar como invitado</Text>
</TouchableOpacity>


    </View>
  );
}

// Definición completa del objeto styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2a44',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  guestButton: {
    marginTop: 10,
    padding: 12,
  },
  guestButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});