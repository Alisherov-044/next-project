import { Button, Card, List, LoadingWrapper } from "@/components";
import { POSTS_URL } from "@/helpers/urls";
import { useFetch } from "@/hooks";
import { Layout, PageTitle } from "@/layouts";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Posts() {
  const router = useRouter();
  let { data, loading } = useFetch(POSTS_URL, []);

  if (router.query.user) {
    data = data.filter((item) => item.userId === Number(router.query.user));
  }

  return (
    <Layout>
      <LoadingWrapper loading={loading}>
        <div className="posts-page page">
          <div className="container">
            <PageTitle
              title="Posts"
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
              className="posts__list"
              Node={{
                Tag: Card,
              }}
              isPosts={true}
            />
          </div>
        </div>
      </LoadingWrapper>
    </Layout>
  );
}
