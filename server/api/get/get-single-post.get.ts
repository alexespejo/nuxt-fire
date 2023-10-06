import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const query = getQuery(event);
 const postRef = doc(db, "posts", query.postID);

 const postSnap = await getDoc(postRef);
 const userID = postSnap.data().id;
 const userRef = doc(db, "user-data", userID);
 const userSnap = await getDoc(userRef);
 return {
  user: userSnap.data(),
  post: postSnap.data(),
 };
});
