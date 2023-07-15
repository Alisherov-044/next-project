import { List, Logo, Page } from "../../components";
import pages from "../../data/pages.json";

export function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <List
        array={pages}
        className="pages__list"
        Node={{
          Tag: Page,
        }}
      />
    </div>
  );
}
