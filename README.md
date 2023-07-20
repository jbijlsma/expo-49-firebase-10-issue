# Run locally

Start the emulators:

```bash
firebase emulators:start --project demo
```

Open the Firebase Auth Emulator at http://127.0.0.1:4000/auth and add a user with email (a@a.com) and password of "password".

Start the app:

```bash
npm start
```

Main branch is the same as the expo-48-firebase-10 branch

Try the other branches for combinations:

expo-48-firebase-10: expo ~48.0.3 and firebase ^10.0.0. No issues
expo-49-firebase-10: expo ^49.0.3 and firebase ^10.0.0. Any reference to getAuth() causes the app to hang
expo-49-firebase-9: expo ^49.0.3 firebase ^9.22.2. No issues
