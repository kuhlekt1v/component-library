import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  CardBanner,
  FormItem,
  HorizontalContainer,
  InlineForm,
  IlBtnPrimary,
  ErrorMessage,
} from '../../../Styles/StyledComponents';

import '../Forms.css';

interface IFormInput {
  name: string;
  username: string;
  password: string;
  confirmPass: string;
}

export const BannerForm = () => {
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
      <HorizontalContainer>
        <CardBanner>
          <InlineForm onSubmit={handleSubmit(onSubmit)}>
            <FormItem className={errors.name ? 'error-display' : ''}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                autoComplete="off"
                {...register('name', { required: true, maxLength: 25 })}
              />
              {errors.name && errors.name.type === 'required' && <ErrorMessage>Name required.</ErrorMessage>}
            </FormItem>
            <FormItem className={errors.username ? 'error-display' : ''}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                autoComplete="off"
                {...register('username', { required: true, maxLength: 25 })}
              />
              {errors.username && errors.username.type === 'required' && (
                <ErrorMessage>Username required.</ErrorMessage>
              )}
            </FormItem>
            <FormItem className={errors.password ? 'error-display' : ''}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                autoComplete="off"
                {...register('password', { required: true, maxLength: 25 })}
              />
              {errors.password && errors.password.type === 'required' && (
                <ErrorMessage>Password required.</ErrorMessage>
              )}
            </FormItem>
            <FormItem className={errors.confirmPass ? 'error-display' : ''}>
              <label htmlFor="confirmPass">Confirm Password</label>
              <input
                type="password"
                id="confirmPass"
                placeholder="Re-type password"
                autoComplete="off"
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
              <IlBtnPrimary type="submit">Register</IlBtnPrimary>
            </FormItem>
          </InlineForm>
        </CardBanner>
      </HorizontalContainer>
    </>
  );
};
