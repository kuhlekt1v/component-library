import React from 'react';
import { FormCheck } from '../FormCheck';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Card,
  CenterContainer,
  FormItem,
  PrimaryButton,
  ErrorMessage,
  NavLinkInfo,
} from '../../../Styles/StyledComponents';

import '../Forms.css';

interface IFormInput {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(`Username: ${data.username}, Password: ${data.password}`);
    reset();
  };

  return (
    <>
      <CenterContainer>
        <div>
          <div className="title-container">
            <h3>Welcome back!</h3>
            <p>Sign in to your account to continue.</p>
          </div>
          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormItem>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  {...register('username', { required: true })}
                />
                {errors.username && errors.username.type === 'required' && (
                  <ErrorMessage>Username required.</ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register('password', { required: true })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <ErrorMessage>Password required.</ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <NavLinkInfo to="/" style={{ marginLeft: '5px', fontSize: '16px' }}>
                  Forgot your password?
                </NavLinkInfo>
              </FormItem>

              <FormCheck id="rememberCheck" value="true" label="Remember me next time" />
              <FormItem>
                <PrimaryButton type="submit">Sign In</PrimaryButton>
              </FormItem>
            </form>
          </Card>
        </div>
      </CenterContainer>
    </>
  );
};
