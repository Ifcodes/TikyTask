import { ReactNode } from "react";
import Nav from "../../molecules/Nav";
import "./styles.scss";

interface LayoutPropsType {
  children: ReactNode;
}
const Layout = ({ children }: LayoutPropsType) => {
  return (
    <section className="layout-wrapper">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
