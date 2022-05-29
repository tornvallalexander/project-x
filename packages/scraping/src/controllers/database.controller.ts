const { db } = require("../helpers/firebaseConfig");
const { setDoc, doc } = require("firebase/firestore");

export const saveUserFollowers = async (username: any, followers: any[]) => {
  await setDoc(doc(db, `/people/${username}`), {
    username: username,
    followers: followers,
  });

  console.log("done");
};
