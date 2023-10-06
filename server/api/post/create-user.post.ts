import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 try {
  const docRef = await setDoc(doc(db, "user-data", body.uid), {
   displayName: body.displayName,
   photoURL: body.photoLink,
   username: body.username,
   biography: body.biography,
   major: body.major,
   socialLinks: {
    github: body.socialLinks.github,
    linkedin: body.socialLinks.linkedin,
   },
   posts: [],
  });
  console.log("success");
  return true;
 } catch (error) {
  throw error;
 }
});
