import { readFileSync } from "node:fs";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp } from "firebase/firestore";

const env = Object.fromEntries(
  readFileSync(new URL("../.env", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const app = initializeApp({
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = getFirestore(app);

const payload = {
  name: "Test User",
  email: "test@example.com",
  subject: "Dummy submission",
  message: "This is a dummy contact form submission to verify Firestore writes work.",
  createdAt: serverTimestamp(),
};

try {
  const ref = await addDoc(collection(db, "contacts"), payload);
  console.log("OK doc id:", ref.id);
  process.exit(0);
} catch (e) {
  console.error("FAIL:", e?.code || "", e?.message || e);
  process.exit(1);
}
