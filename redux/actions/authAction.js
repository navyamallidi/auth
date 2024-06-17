import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from './actiontypes';
  
  export const login = (credentials) => {
    return async (dispatch) => {
      dispatch({ type: LOGIN_REQUEST });
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials.username,
            phone: credentials.phone,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const user = await response.json();
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error.message });
      }
    };
  };
  
  export const signup = (userData) => {
    return async (dispatch) => {
      dispatch({ type: SIGNUP_REQUEST });
      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Signup failed');
        }
  
        const user = await response.json();
        dispatch({ type: SIGNUP_SUCCESS, payload: user });
      } catch (error) {
        dispatch({ type: SIGNUP_FAILURE, error: error.message });
      }
    };
  };
  