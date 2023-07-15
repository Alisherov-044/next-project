import { Loading } from "..";

export function LoadingWrapper({ loading, children }) {
  return <>{loading ? <Loading /> : children}</>;
}
