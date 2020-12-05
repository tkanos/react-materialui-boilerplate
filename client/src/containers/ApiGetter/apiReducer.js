import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const api = createSlice({
  name: 'api',
  initialState: {
    value: "",
  },
  reducers: {
    fetchApi: state => {
      axios.get(`http://localhost:4000/api/dummy/json`)
      .then(response => {state.value = JSON.stringify(response.data)})
      .catch(e => {
        console.log(e);
      });
    },
  },
});

export const { fetchApi } = api.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getResponseValue = state => state.api.value;

export default api.reducer;