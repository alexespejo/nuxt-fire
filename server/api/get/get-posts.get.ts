import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const querySnapshot = await getDocs(collection(db, "posts"));
 const userPosts: any[] = [];
 querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  userPosts.push(doc.data());
 });
 return { posts: userPosts };
});
