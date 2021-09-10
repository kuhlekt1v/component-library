import React from 'react';
import { CardBanner, FormItem, HorizontalContainer, IlBtnPrimary } from '../../Styles/StyledComponents';

export const FormBanner = () => {
  return (
    <>
      <HorizontalContainer>
        <CardBanner>
          <FormItem>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter name" />
          </FormItem>
          <FormItem>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
          </FormItem>
          <FormItem>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </FormItem>
          <FormItem>
            <label htmlFor="confirmPass">Confirm Password</label>
            <input type="password" id="confirmPass" placeholder="Re-type password" />
          </FormItem>
          <FormItem>
            <IlBtnPrimary type="submit">Register</IlBtnPrimary>
          </FormItem>
        </CardBanner>
      </HorizontalContainer>
    </>
  );
};
