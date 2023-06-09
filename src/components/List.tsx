import React from 'react';

interface ListProps<T> {
  items: T[],
  renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
  return (
    <div style={{ margin: 15 }}>
      {props.items.map(props.renderItem)}
    </div>
  );
}

export default List;
