// REACT & REDUX IMPORTS:
import { createSlice } from "@reduxjs/toolkit";

// Initial state for a UI:
const uiInitialState = {
  isShown: false,
  width: window.innerWidth,
  scrollY: 0,
  hiddenMenuIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    // Mechanic for showing and closing cart modal:
    toggle(state) {
      state.isShown = !state.isShown;
    },
    // Mechanic for tracking width of the window:
    changeWidth(state, action) {
      state.width = action.payload.width;
    },
    // Mechanic for tracking vertical position on the page:
    scroll(state, action) {
      state.scrollY = action.payload;
    },
    // Mechanic for tracking the status of hidden menu (shown/closed)
    hiddenMenuIsShown(state) {
      state.hiddenMenuIsShown = !state.hiddenMenuIsShown;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
