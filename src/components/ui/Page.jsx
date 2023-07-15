import Link from "next/link";
import parse from "html-react-parser";

export function Page({ children }) {
  const { icon, name, url } = children;
  return (
    <Link href={url} className="page-link">
      <span className="page-link__icon">{parse(icon)}</span>
      <h4 className="page-link__name">{name}</h4>
    </Link>
  );
}
