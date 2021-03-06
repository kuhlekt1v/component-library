import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, FormItem, PrimaryButton, ErrorMessage, CenterContainer } from '../../../Styles/StyledComponents';

import '../Forms.css';

interface IFormInput {
  name: string;
  username: string;
  password: string;
  confirmPass: string;
}

export const RegisterForm = () => {
  const {
    reset,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <CenterContainer>
        <div>
          <div className="title-container">
            <h3>Get started</h3>
            <p>Enter the required information below to register a new user.</p>
          </div>
          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormItem>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  {...register('name', { required: true, maxLength: 25 })}
                />
                {errors.name && errors.name.type === 'required' && <ErrorMessage>Name required.</ErrorMessage>}
              </FormItem>
              <FormItem>
                <label htmlFor="username">User</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  {...register('username', { required: true, maxLength: 25 })}
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
                  placeholder="Enter password"
                  {...register('password', { required: true, maxLength: 25 })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <ErrorMessage>Password required.</ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <label htmlFor="confirmPass">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPass"
                  placeholder="Re-enter password"
                  {...register('confirmPass', {
                    required: true,
                    maxLength: 25,
                    validate: () => String(getValues('password')) === String(getValues('confirmPass')),
                  })}
                />
                {errors.confirmPass && errors.confirmPass.type === 'required' && (
                  <ErrorMessage>Password confirmation required.</ErrorMessage>
                )}
                {errors.confirmPass && errors.confirmPass.type === 'validate' && (
                  <ErrorMessage>Password fields must match.</ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <PrimaryButton type="submit">Register</PrimaryButton>
              </FormItem>
            </form>
          </Card>
        </div>
      </CenterContainer>
    </>
  );
};
