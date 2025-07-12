import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Simulates fetching user info from an API
const fetchUser = async (userId) => {
  // Intentional delay and mock data
  await new Promise(res => setTimeout(res, 200));
  if (userId === '123') return { id: '123', name: 'Alice' };
  if (userId === '456') return { id: '456', name: 'Bob' };
  return { id: userId, name: '' };
};

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    fetchUser(userId).then(data => {
      setUser(data);
      // BUG: incorrectly only sets initial value if displayName is undefined
      if (displayName === undefined) setDisplayName(data.name);
    });
    // Oversight: dependency array empty, so does not run when userId changes
    // eslint-disable-next-line
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{padding: 16, border: '1px solid #aaa', maxWidth: 400}}>
      <h2>Profile for User #{user.id}</h2>
      <form>
        <label>Display Name:{' '}
          <input
            name="displayName"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            style={{marginLeft: 8}}
          />
        </label>
      </form>
    </div>
  );
}

export default Profile;
