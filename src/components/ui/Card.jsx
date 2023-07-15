import { clearObj, destructureObj } from "@/helpers";
import { USER_URL } from "@/helpers/urls";
import { useFetch } from "@/hooks";
import { Fragment } from "react";
import Link from "next/link";

const icons = {
  address: <i className="bi bi-geo-alt"></i>,
  username: <i className="bi bi-braces"></i>,
  company: <i className="bi bi-building"></i>,
  phone: <i className="bi bi-telephone"></i>,
  title: <i className="bi bi-paragraph"></i>,
  body: <i className="bi bi-body-text"></i>,
};

function CardHeader({ id, rest }) {
  const { isUsers, isUser, isPosts, isPost } = rest;

  if (isUsers) {
    return (
      <Link href={`/user/${id}`} className="link-to-post">
        <span>user</span>
        <i className="bi bi-arrow-right"></i>
      </Link>
    );
  } else if (isUser) {
    return (
      <Link href={`/posts?user=${id}`} className="link-to-post">
        <span>posts</span>
        <i className="bi bi-arrow-right"></i>
      </Link>
    );
  } else if (isPosts) {
    return (
      <Link href={`/posts/${id}`} className="link-to-post">
        <span>post</span>
        <i className="bi bi-arrow-right"></i>
      </Link>
    );
  } else if (isPost) {
    return null;
  }
}

export function Card({ children, ...rest }) {
  const { isUsers, isUser } = rest;
  let { id, userId, name, email } = children;

  if (!name | !email) {
    const { data } = useFetch(USER_URL(userId), {}, [userId]);
    name = data.name;
    email = data.email;
  }

  const cleanedData = clearObj(children, [
    "id",
    "userId",
    "name",
    "email",
    "website",
  ]);
  const destructuredData = destructureObj(cleanedData, [
    {
      key: "address",
      values: ["city", "street", "suite"],
    },
    {
      key: "company",
      values: ["name"],
    },
  ]);

  return (
    <div className="card">
      <div className="card__header">
        <CardHeader id={id} rest={rest} />
        <span className="card__header-img">
          <i className="bi bi-person-circle"></i>
        </span>
        <div className="card__header-info">
          <h4 className="name">{name}</h4>
          <p className="email">{email}</p>
        </div>
      </div>
      <div className="card__content">
        {Object.keys(destructuredData).map((key, index) =>
          index === 1 ? (
            <Fragment key={index}>
              <h5 className="card__content-row">
                {icons[key]}
                <span>{destructuredData[key]}</span>
              </h5>
              {isUsers | isUser ? (
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  maxime odit! Suscipit expedita blanditiis et id facilis amet?
                  Dolorem, repellat!
                </p>
              ) : null}
            </Fragment>
          ) : (
            <h5 className="card__content-row" key={index}>
              {icons[key]}
              <span>{destructuredData[key]}</span>
            </h5>
          )
        )}
      </div>
    </div>
  );
}
