import { createSlice } from "@reduxjs/toolkit";
function getData() {
  const savedUserData = localStorage.getItem("userData");
  if (savedUserData) {
    const parsedUserData = JSON.parse(savedUserData);
    return parsedUserData;
  } else {
    return {};
  }
}
function getToken() {
  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    return savedToken;
  } else {
    return null;
  }
}

function login() {
  const savedToken = localStorage.getItem("token");
  if (savedToken) {
    return true;
  } else {
    return false;
  }
}

const initialState = {
  user: getData(),
  token: getToken(),
  isLogin: login(),
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
      state.isLogin = Object.values(action.payload).length > 0;
    },
    setToken(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setUserData, setToken } = userSlice.actions;

export default userSlice.reducer;
