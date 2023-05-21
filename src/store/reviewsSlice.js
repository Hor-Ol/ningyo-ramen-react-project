// REACT & REDUX IMPORTS:
import { createSlice } from "@reduxjs/toolkit";

// Initial state for a reviews:
const initialState = { name: "", title: "", review: "", date: "" };

const reviewsSlice = createSlice({
  name: reviews,
  initialState: initialState,
  reducers: {
    // Mechanic for registering a review data and because reducers cannot have side effects in them data sending to local storage happens in Reviews.js:
    addReview(state, action) {
      state.name = action.payload.name;
      state.title = action.payload.title;
      state.review = action.payload.review;
      state.date = action.payload.date;
    },
  },
});

export const reviewsActions = reviewsSlice.actions;

export default reviewsSlice.reducer;
