import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
// import { navigateTo } from "nuxt/app";

export default defineEventHandler(async (event) => {
 const id: any = getRouterParam(event, "uid");
 const docRef = doc(db, "user-data", id);
 const docSnap = await getDoc(docRef);
 return docSnap.exists();
});
