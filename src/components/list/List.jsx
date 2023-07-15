export const List = ({ array, className, Node = {}, ...rest }) => {
  const { isUsers, isUser, isPosts } = rest;
  const { Tag, nodeClassName, onClick } = Node;
  return (
    <div className={`list ${className}`}>
      {array.map((item, index) => (
        <Tag
          key={item.id ? item.id : index}
          className={nodeClassName}
          onClick={onClick}
          isUsers={isUsers}
          isUser={isUser}
          isPosts={isPosts}
        >
          {item}
        </Tag>
      ))}
    </div>
  );
};
