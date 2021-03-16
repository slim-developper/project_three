import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//sign in user
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

//sign in compete
export const signinComp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signInComp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
//sign up user
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
//sign up compete

export const signupComp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUpComp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};