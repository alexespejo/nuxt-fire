import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const id: any = getRouterParam(event, "uid");
 try {
  const docRef = doc(db, "user-data", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
   return docSnap.data();
  }
 } catch (error) {
  console.log("invalid id", error);
 }

 //  const docRef = doc(db, "user-data", "jn91RBk9HmqJD8FYfc8V");
});
