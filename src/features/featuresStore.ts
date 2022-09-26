import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sharedReducer from "../features/Shared/store/slice";
import lighthouseViewerReducer from "../features/LighthouseViewer/store/slice";

export const featuresStore = configureStore({
  reducer: {
    shared: sharedReducer,
    lighthouseViewer: lighthouseViewerReducer,
  },
})

export type AppDispatch = typeof featuresStore.dispatch
export type RootState = ReturnType<typeof featuresStore.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
