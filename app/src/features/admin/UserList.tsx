import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { useTranslation } from 'react-i18next';

interface UserDoc {
  id: string;
  displayName?: string;
  role?: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserDoc[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, 'users'));
      setUsers(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>{t('userList.title')}</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.displayName || u.id} ({u.role})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
