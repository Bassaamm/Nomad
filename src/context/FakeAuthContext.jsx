// import { createContext, useContext, useReducer } from "react";

// const AuthContext = createContext();

// const initialState = {
//   user: null,
//   isAuthenticated: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "login":
//       return { ...state, user: action.payload, isAuthenticated: true };
//     case "logout":
//       return { ...state, user: null, isAuthenticated: false };
//     default:
//       throw new Error("Unknown action");
//   }
// }

// const FAKE_USER = {
//   name: "Bassam",
//   email: "Bassam@Test.com",
//   password: "testing",
//   avatar:
//     "https://www.cnet.com/a/img/resize/3167f04b09fe904d1df6628c04fc9b1b953d696b/hub/2021/10/16/18dac930-d01e-45c5-a4b3-874eecd1f1a0/screenshot-2021-10-16-at-19-40-04.png?auto=webp&fit=crop&height=1200&width=1200",
// };

// function AuthProvider({ children }) {
//   const [{ user, isAuthenticated }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   function login(email, password) {
//     if (email === FAKE_USER.email && password === FAKE_USER.password)
//       dispatch({ type: "login", payload: FAKE_USER });
//   }

//   function logout() {
//     dispatch({ type: "logout" });
//   }

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export { AuthProvider };
