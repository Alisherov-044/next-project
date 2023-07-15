import { Layout, PageTitle } from "../layouts";
import { Button, Card, List, LoadingWrapper } from "../components";
import { useFetch } from "../hooks";
import { USERS_URL } from "@/helpers/urls";

export default function index() {
  const { data, loading } = useFetch(USERS_URL, []);

  return (
    <Layout>
      <LoadingWrapper loading={loading}>
        <div className="home-page page">
          <div className="container">
            <PageTitle
              title="Users"
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
            <List
              array={data}
              className="users__list"
              Node={{
                Tag: Card,
              }}
              isUsers={true}
            />
          </div>
        </div>
      </LoadingWrapper>
    </Layout>
  );
}
