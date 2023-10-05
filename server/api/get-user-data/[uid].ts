import { getDoc, setDoc, collection, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const id: any = getRouterParam(event, "uid");
 try {
  const docRef = doc(db, "user-data", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
   return docSnap.data();
  } else {
   const userCollection = collection(db, "user-data");
   await setDoc(doc(userCollection, id), {
    major: "",
    biography: "",
    year: 0,
    posts: [],
   });
  }
 } catch (error) {
  console.log(error);
 }
});
