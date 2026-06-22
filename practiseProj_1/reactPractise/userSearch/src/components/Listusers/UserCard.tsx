// src/components/UserCard.tsx (Updated with CSS Classes)

import React from 'react';
// 1. IMPORT THE CSS FILE
import './UserCard.css'; 
import type { IUser } from '../../App';


interface UserCardProps {
  user: IUser;
    onDelete: (id: number)=> void
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const { id, name, phone, Website } = user;

  const formatPhone = (num: number): string => {
    // Keep the formatting logic clean
    const numStr = String(num);
    if (numStr.includes('n')) {
      return numStr.replace('n', '');
    }
    // Simple formatting for visibility
    return numStr.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  return (
    <div key={id} className="user-card">
      <div>
      <h3 className="user-card-name">{name}</h3>
      <p className="user-card-phone">
        {formatPhone(phone)}
      </p>
      <p className="user-card-website">
        <a 
          href={`http://${Website}`} 
          target="_blank" 
          rel="noopener noreferrer" 
        >
          {Website}
        </a>
      </p>
</div>
 <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
export default UserCard;