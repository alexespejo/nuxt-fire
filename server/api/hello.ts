import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default defineEventHandler(async (event) => {
 const docRef = doc(db, "user-data", "jn91RBk9HmqJD8FYfc8V");
 const docSnap = await getDoc(docRef);

 if (docSnap.exists()) {
  return docSnap.data();
 } else {
  // docSnap.data() will be undefined in this case
  return;
 }
});
