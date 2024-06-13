import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAr8k2I6zKAQSuACQpyeINbQmVkqkZB5R0",
  authDomain: "vanlife-ornixz.firebaseapp.com",
  projectId: "vanlife-ornixz",
  storageBucket: "vanlife-ornixz.appspot.com",
  messagingSenderId: "200727460596",
  appId: "1:200727460596:web:b8dffa13727d22d5d5fca1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
