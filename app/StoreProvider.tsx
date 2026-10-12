"use client";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, Persistor } from "redux-persist";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import  AOS from  'aos'
import "aos/dist/aos.css"


 

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  const [store] = useState<AppStore>(() => createStore());
  const [persistor] = useState<Persistor>(() => persistStore(store));

  return (
    <ClerkProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <Toaster />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  );
};

export default StoreProvider;
