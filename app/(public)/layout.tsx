import Header from "../_components/layout/Header";
import Footer from "../_components/layout/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
