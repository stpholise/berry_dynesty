"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, Persistor } from "redux-persist";
import { ClerkProvider } from "@clerk/nextjs";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store] = useState<AppStore>(() => createStore());
  const [persistor] = useState<Persistor>(() => persistStore(store));

  return (
    <ClerkProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ClerkProvider>
  );
};

export default StoreProvider;
