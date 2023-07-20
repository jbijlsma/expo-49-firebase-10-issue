import { initializeApp, getApps } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { Platform } from "react-native";

if (getApps().length < 1) {
  console.log("initializeApp");
  initializeApp({ projectId: "demo", apiKey: "any" });

  const hostIp =
    Platform.OS === "ios"
      ? process.env.EXPO_PUBLIC_LOCAL_IP ?? "0.0.0.0"
      : "10.0.2.2";

  console.log("Using Firebase Auth Emulator");
  const auth = getAuth();
  connectAuthEmulator(auth, `http://${hostIp}:9099`);

  console.log("Using Firebase Realtime Database Emulator");
  const db = getDatabase();
  connectDatabaseEmulator(db, hostIp, 9000);
}
