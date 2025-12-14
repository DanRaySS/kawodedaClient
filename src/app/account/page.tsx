'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import cls from './AccountPage.module.scss';
import { Button } from 'shared/ui/Button/Button';

export default function AccountPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (event: any) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(password, login);
  };

  return (
    <main className={cls.AccountPage}>
      <div className={cls.AccountPage__container}>
        <form onSubmit={handleSubmit} className={cls.Form}>
          <label className={cls.Form__field}>
            Логин:
            <input type="text" value={login} onChange={handleChangeLogin} className={cls.Form__input}/>
          </label>
          <label className={cls.Form__field}>
            Пароль:
            <input type="text" value={password} onChange={handleChangePassword} className={cls.Form__input}/>
          </label>
          <Button>Войти</Button>
        </form>
      </div>
    </main>
  );
}