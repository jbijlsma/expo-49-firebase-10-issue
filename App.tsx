import "./firebaseConfig";

import { StatusBar } from "expo-status-bar";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect");

    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      console.log("User: " + user?.email);
    });
  }, []);

  async function signInHandler() {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "a@a.com",
        "password"
      );
      setUserEmail(userCredential.user.email);
    } catch (err) {
      Alert.alert("Sorry", err?.toString());
    }
  }

  async function signOutHandler() {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUserEmail(null);
    } catch (err) {
      Alert.alert("Sorry", err?.toString());
    }
  }

  return (
    <View style={styles.container}>
      <Text>Welcome {userEmail ?? "anonymous"}</Text>

      {userEmail === null ? (
        <View style={styles.btnContainer}>
          <Button
            title="Sign in"
            onPress={signInHandler}
          />
        </View>
      ) : (
        <View style={styles.btnContainer}>
          <Button
            title="Sign out"
            onPress={signOutHandler}
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    padding: 8,
  },
});
