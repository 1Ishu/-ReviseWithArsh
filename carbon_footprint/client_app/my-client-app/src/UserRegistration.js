import React, { useState } from 'react';
import connection from './SorobanConnection';

const UserRegistration = () => {
  const [userId, setUserId] = useState('');

  const handleRegister = async () => {
    try {
      await connection.call('registerUser', userId);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {/* User information fields (optional) */}
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Stellar Account ID" />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
