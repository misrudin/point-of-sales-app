import app from '../../configs';

// get detail user yang sedang login
export const getDetailUser = async (uid) => {
  const urlUser = `users/${uid}`;
  let user = null;
  await app
    .database()
    .ref(urlUser)
    .once('value')
    .then((snapshot) => {
      user = snapshot.val();
    });
  return user;
};

// get user yang sedang login
export const getUser = async () => {
  app.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      return user;
    } else {
      return null;
    }
  });
};

// cek apakah user mempunyai toko
export const userHaveStore = async (uid) => {
  const urlStore = `stores/${uid}`;
  let store = null;
  await app
    .database()
    .ref(urlStore)
    .once('value')
    .then((snapshot) => {
      store = snapshot.val();
    });
  return store;
};

// membuat fungsi logout
export const logOut = () => {
  app
    .auth()
    .signOut()
    .then(
      function () {
        console.log('Signed Out');
      },
      function (error) {
        console.error('Sign Out Error', error);
      },
    );
};
