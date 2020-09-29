import {storeData, removeData} from '../../utils';

const initialState = {
  isLoggedIn: false,
  uid: null,
  userData: null,
  userHaveStore: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const userDataFromAction = action.userData;
      storeData('userData', userDataFromAction);
      storeData('uid', {uid: action.uid});
      return {
        ...state,
        userData: userDataFromAction,
        isLoggedIn: true,
        uid: action.uid,
      };

    case 'REGISTER':
      const dataRegister = action.userData;
      storeData('userData', dataRegister);
      storeData('userHaveStore', {userHaveStore: null});
      storeData('uid', {uid: action.uid});
      return {
        ...state,
        userData: dataRegister,
        isLoggedIn: true,
        uid: action.uid,
        userHaveStore: null,
      };

    case 'LOGOUT':
      removeData('userData');
      removeData('uid');
      removeData('userHaveStore');
      return {
        ...state,
        userData: null,
        isLoggedIn: false,
        uid: null,
        userHaveStore: false,
      };

    case 'STORE':
      storeData('userHaveStore', {userHaveStore: action.store});
      return {
        ...state,
        userHaveStore: action.store,
      };

    default:
      return state;
  }
};

export default authReducer;
