import { configureStore } from '@reduxjs/toolkit';

import settings from "../containers/Setting/settingsReducer";
import counter from "../containers/Home/counterReducer"
import api from '../containers/ApiGetter/apiReducer'

export default configureStore({
  reducer: {
    settings: settings,
    counter: counter,
    api: api,
  },
});
