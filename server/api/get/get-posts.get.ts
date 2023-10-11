import {
 collection,
 where,
 getDocs,
 query,
 orderBy,
 limit,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

export default defineEventHandler(async (event) => {
 const q = query(collection(db, "posts"), limit(50));
 const querySnapshot = await getDocs(q);

 const userPosts: any[] = [];
 querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  userPosts.push(doc.data());
 });
 return { posts: userPosts };
});

// const q = query(citiesRef, orderBy("name", "desc"), limit(3));
