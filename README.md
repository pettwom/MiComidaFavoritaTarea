Instalación
======================

npx create-expo-app MiComidaFavorita --template blank
cd MiComidaFavorita

npm install @react-navigation/native @react-navigation/native-stack
npm install firebase
npm install react-native-elements
npm install expo-constants
npm install react-native-safe-area-context

CONFIGURACION FIREBASE
======================
1. Ir a Firebase Console (https://console.firebase.google.com/)
2. Crear nuevo proyecto "MiComidaFavorita"
3. Habilitar Authentication (Email/Password)
4. Crear Cloud Firestore
5. Registrar la aplicación web
6. Copiar configuración de Firebase

ESTRUCTURA
==========
   MiComidaFavorita/
├── src/
│ ├── config/
│ │ └── firebase.js
│ ├── screens/
│ │ ├── LoginScreen.js
│ │ ├── RegisterScreen.js
│ │ └── HomeScreen.js
│ ├── components/
│ │ └── ProfileForm.js
│ └── navigation/
│ └── AppNavigator.js
├── App.js
└── package.json

MEJORAS
========
Se adiciono validaciones a los campos de registrar, como ser: 
1. verificar que el campo de email, cumpla el requisito de un correo electronico.
2. verificar que el campo de contraseña, tenga minimo 8 caracteres una mayuscula, una miniscula y un caracter especial
Se verifico que en el login, no permita los campos en blanco, el boton iniciar sesion, se activara en el momento que los campos esten llenos.

SCREENSHOT
==========
![image](https://github.com/user-attachments/assets/ae2beb9f-4808-4163-85fb-563367a00215)
![image](https://github.com/user-attachments/assets/5573c829-25a0-47bc-b785-a42106fd3489)
![image](https://github.com/user-attachments/assets/de56879d-89cb-4ff2-9645-51438e096f04)
![image](https://github.com/user-attachments/assets/267512f4-27c2-4f2f-b810-f4ea4b946049)
![image](https://github.com/user-attachments/assets/3e503dda-bfac-45d4-b30e-246262cf1a9e)




