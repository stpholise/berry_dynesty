import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";
import ChatWhatsapp from "../_components/buttons/ChatWhatsapp";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ChatWhatsapp />
    </>
  );
};

export default layout;
