import admin, { ServiceAccount } from "firebase-admin";
import firebaseSecrets from "@/secret/firebase-secrets.json";

const firebaseAdminConfig = {
  credential: admin.credential.cert(firebaseSecrets as ServiceAccount),
};

const firebaseAdmin = admin.initializeApp(firebaseAdminConfig);

export { firebaseAdmin };
