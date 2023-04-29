import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ margin: 10 }}>
      <input type="checkbox" checked={todo.completed}/>
      <span>{todo.title}</span>
    </div>
  );
};

export default TodoItem;