import * as firebase from "firebase-admin";

const settings = { timestampsInSnapshots: true };

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

const firestore = firebase.firestore();

firestore.settings(settings);

export default firestore;
