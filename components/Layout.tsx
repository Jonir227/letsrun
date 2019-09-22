import Header from "./Header";
import { FC } from "react";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout: FC = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

export default Layout;
