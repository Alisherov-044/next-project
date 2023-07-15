import { Button, Card, LoadingWrapper } from "@/components";
import { USER_URL } from "@/helpers/urls";
import { useFetch } from "@/hooks";
import { Layout, PageTitle } from "@/layouts";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { data, loading } = useFetch(
    router.query.id ? USER_URL(router.query.id) : null,
    {},
    [router.query.id]
  );

  return (
    <Layout>
      <LoadingWrapper loading={loading}>
        <div className="user-page page">
          <div className="container">
            <PageTitle
              title="User"
              actions={
                <div className="actions">
                  <span className="action">
                    <i className="bi bi-upload"></i>
                    Import
                  </span>
                  <span className="action">
                    <i className="bi bi-arrow-bar-down"></i>
                    Export
                  </span>
                </div>
              }
              button={
                <Button
                  className="button--primary"
                  text={
                    <span>
                      <i className="bi bi-plus"></i>
                      Add
                    </span>
                  }
                />
              }
            />
            <Card isUser={true}>{data}</Card>
          </div>
        </div>
      </LoadingWrapper>
    </Layout>
  );
}
