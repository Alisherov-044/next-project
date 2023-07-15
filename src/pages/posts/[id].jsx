import { Button, Card, LoadingWrapper } from "@/components";
import { POST_URL } from "@/helpers/urls";
import { useFetch } from "@/hooks";
import { Layout, PageTitle } from "@/layouts";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { data, loading } = useFetch(
    router.query.id ? POST_URL(router.query.id) : null,
    {},
    [router.query.id]
  );

  return (
    <Layout>
      <LoadingWrapper loading={loading}>
        <div className="post-page page">
          <div className="container">
            <PageTitle
              title="Post"
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
            <Card isPost={true}>{data}</Card>
          </div>
        </div>
      </LoadingWrapper>
    </Layout>
  );
}
