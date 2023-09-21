import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 onAuthStateChanged,
 signInWithPopup,
 GoogleAuthProvider,
} from "firebase/auth";

export const googleLogin = async () => {
 const config = useRuntimeConfig();
 const auth = getAuth();
 const provider = new GoogleAuthProvider();
 signInWithPopup(auth, provider)
  .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential: any = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   console.log(token);
   // The signed-in user info.
   const user = result.user;
   // IdP data available using getAdditionalUserInfo(result)
   // ...
  })
  .catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   console.log(errorMessage);
   console.log(config.public.firebaseAuthDomain);
  });
};

export const createUser = async (email: string, password: string) => {
 const auth = getAuth();
 const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
  });

 return credentials;
};

export const signInUser = async (email: string, password: string) => {
 const auth = getAuth();
 const credentials = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   return navigateTo("/secret");
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage);
  });

 return credentials;
};

export const initUser = async () => {
 const auth = getAuth();
 const firebaseUser: any = useFirebaseUser();
 firebaseUser.value = auth.currentUser;
 onAuthStateChanged(auth, (user) => {
  if (user) {
   // User is signed in, see docs for a list of available properties
   // https://firebase.google.com/docs/reference/js/auth.user
   //    console.log("auth changed", user);
  } else {
   //    console.log("auth changed", user);
  }
  firebaseUser.value = user;
 });
};

export const signOutUser = async () => {
 const auth = getAuth();
 const res = await auth.signOut();
 console.log("sign out", res);
};
