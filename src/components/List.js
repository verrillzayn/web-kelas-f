import React from 'react';

const List = (props) => {
  return (
    <div className="container">
      {props.items.map((item) => {
        const { id, title } = item;
        return (
          <ul className="list-group" key={id}>
            <li className="list-group-item">
              {title}
              <div>
                <Button onClick={() => editItem(id)}>edit</Button>
                <Button onClick={() => removeItem(id)}>delete</Button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default List;
