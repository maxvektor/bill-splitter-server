import * as firebase from "firebase-admin";

type ServiceAccount = import("firebase-admin").ServiceAccount;
const serviceAccount: ServiceAccount = require("../config/bill-splitter-server-firebase");

const config = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://bill-splitter-server.firebaseio.com",
  timestampsInSnapshots: true
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase.firestore();
