import React from 'react';
import { useTranslation } from 'react-i18next';

const NoAccess: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('noAccess.title')}</h2>
      <p>{t('noAccess.message')}</p>
    </div>
  );
};

export default NoAccess;
