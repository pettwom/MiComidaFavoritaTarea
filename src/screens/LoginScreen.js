import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    setError("");  // Limpiar error general
    setEmailError("");  // Limpiar error de email
    setPasswordError("");  // Limpiar error de contraseña

    // Validar email (formato correcto)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError("El email no puede estar vacío");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Por favor ingrese un email válido");
      return;
    }

    // Validar contraseña no vacía
    if (!password) {
      setPasswordError("La contraseña no puede estar vacía");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (error) {
      setError("Error al iniciar sesión: " + error.message);
    }
  };

  // Verifica si el formulario es válido
  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Mi Comida Favorita
      </Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        errorMessage={emailError}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        errorMessage={passwordError}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        containerStyle={styles.button}
        disabled={!isFormValid}  // Deshabilitar el botón si hay errores
      />
      <Button
        title="Registrarse"
        type="outline"
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    marginBottom: 30
  },
  button: {
    marginVertical: 10
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10
  }
});
