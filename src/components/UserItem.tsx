import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div key={user.id} style={{ margin: 10 }}>
      {user.name} lives in the
      city: {user.address.city},
      street: {user.address.street} and
      zipcode: {user.address.zipcode}
    </div>
  );
};

export default UserItem;