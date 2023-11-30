import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Router/MainRoute";
import { Provider } from "react-redux";
import { store } from "./global/store";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={MainRoute} />
      </PersistGate>
    </Provider>
  );
};

export default App;
