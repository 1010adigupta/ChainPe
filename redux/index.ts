// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { injectStore } from "../utils/storeInteract";
// import chainReducer from "./chainSlice";
// import tokenReducer from "./tokensSlice";
// export const store = configureStore({
//   reducer: {
//     chainState: chainReducer,
//     tokenState: tokenReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export default store;
import { hookstate, useHookstate } from "@hookstate/core";

export const chainState = hookstate("BSC_TEST");
export const balanceState = hookstate(0);

