export function PageTitle({ title, actions, button }) {
  return (
    <div className="page__title">
      <div className="page__title-left">
        <h2 className="title">{title}</h2>
        {actions}
      </div>
      <div className="page__title-right">{button}</div>
    </div>
  );
}
