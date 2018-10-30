import * as admin from "firebase-admin";

type ServiceAccount = import("firebase-admin").ServiceAccount;
const serviceAccount: ServiceAccount = require("../config/bill-splitter-server-firebase");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://bill-splitter-server.firebaseio.com"
  });
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default admin.firestore();
