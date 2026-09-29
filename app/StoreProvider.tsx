"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "@/store";
// import Header from "./_components/layout/Header";
// import Footer from "./_components/layout/Footer";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store] = useState<AppStore>(createStore);
  return (
    <Provider store={store}>
      {" "}
      {/* <Header /> */}
       {children} 
       {/* <Footer /> */}
    </Provider>
  );
};

export default StoreProvider;
