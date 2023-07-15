import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { PageTitle } from "./page/PageTitle";

export function Layout({ children }) {
  return (
    <div className="main__layout">
      <Sidebar />
      <main className="main">
        <Header />
        {children}
      </main>
    </div>
  );
}

export { PageTitle };
