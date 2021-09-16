import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Constants.css';

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0px;
  }

  input {
    background-color: var(--inputbkg);
    color: var(--body);
    padding: 5px 16px;
    height: 44px;
    border: none;
    border-radius: 8px;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1pt var(--primary);
    }
  }

  label {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

// Cards.
export const CenterContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HorizontalContainer = styled.div`
  display: flex;
`;

const CardBase = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(160, 163, 189, 0.1);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Card = styled(CardBase)`
  width: 418px;
`;

export const CardBanner = styled(CardBase)`
  display: flex;
  /* align-items: center;
  justify-content: space-between; */
  margin: 66px 10px 10px;
  padding: 5px 15px 0;
  width: 100vw;
  /* gap: 10px; */
`;

export const InlineForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

// Form validation.
export const ErrorMessage = styled.span`
  background-color: transparent;
  color: var(--danger);
  font-size: 12px;
  font-style: italic;
  margin: 10px 0 0 5px;
`;

// Buttons.
export const Button = styled.button`
  padding: 5px 16px;
  height: 44px;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  color: var(--white);
  background-color: var(--primary);

  &:hover {
    background-color: var(--primarylt);
  }
`;

// Inline buttons.
export const IlBtnPrimary = styled(PrimaryButton)`
  margin-top: 20px;
`;

// === TEXT === \\

const TitleText = styled.p`
  color: var(--white);
  font-style: normal;
  line-height: 24px;
  margin-left: 12px;
  white-space: nowrap;
`;

export const Title = styled(TitleText)`
  font-weight: bold;
  font-size: 19px;
  letter-spacing: 0.4px;
`;

export const Subtitle = styled(TitleText)`
  font-weight: 300;
  font-size: 14px;
`;

// === LINKS === \\
export const NavLinkLt = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 18px;
  opacity: 0.5;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const NavLinkInfo = styled(Link)`
  color: var(--info);
  text-decoration: none;
  font-weight: 300;

  &:hover,
  &:active {
    color: var(--primary);
  }
`;
