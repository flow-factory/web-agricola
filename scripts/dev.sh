export FIRESTORE_EMULATOR_HOST=localhost:8080

npm --prefix ../functions run build
npm --prefix ../frontend run build

firebase emulators:start --only functions,firestore,hosting