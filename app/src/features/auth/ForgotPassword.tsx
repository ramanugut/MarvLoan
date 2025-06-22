import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { useTranslation } from 'react-i18next';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    if (!emailRegex.test(email)) {
      setError(t('login.enterValidEmail'));
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(t('login.resetSent'));
    } catch (err) {
      setError(t('login.resetFailed'));
    }
  };

  return (
    <div>
      <h2>{t('login.forgot')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">{t('login.forgot')}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
