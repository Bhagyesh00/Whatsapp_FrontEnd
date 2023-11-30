import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [], // Change from currentUser to users array
  },
  reducers: {
    addchat: (state, action) => {
      state.chats.push(action.payload); // Push the new user to the array
    },
    removechat: (state, action) => {
      // Assuming action.payload is the user to be removed
      state.chats = state.chats.filter(chat => chat.id !== action.payload.id);
    },
  },
});

export const { addchat, removechat } = chatSlice.actions;
export const selectchats = (state) => state.chat.chats;

export default chatSlice.reducer;
