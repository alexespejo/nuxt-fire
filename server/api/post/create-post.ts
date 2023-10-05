import {
 collection,
 addDoc,
 doc,
 updateDoc,
 arrayUnion,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 const userRef = doc(db, "user-data", body.uid);
 const docRef = await addDoc(collection(db, "posts"), {
  id: body.uid,
  title: body.postTitle,
  content: body.postContent,
 });

 await updateDoc(userRef, {
  posts: arrayUnion(docRef.id),
 });
 //  console.log(body);
 setResponseStatus(event, 202);
});
