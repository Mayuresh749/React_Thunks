import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers,userAdd } from '../index';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading : false,
    data: [],
    error : null,
  },
  extraReducers(builder) {
    
    //  fetchUsers.pending === users/fetch/pending
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.name
    });

    builder.addCase(userAdd.pending, (state, action) => {
        
    });
    builder.addCase(userAdd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload) 
    });
    builder.addCase(userAdd.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const usersReducer = usersSlice.reducer;