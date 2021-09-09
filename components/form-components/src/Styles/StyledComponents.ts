import styled from 'styled-components';
import { COLORS } from '../Constants';

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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: ${COLORS.inputbkg};
    color: ${COLORS.body};
    padding: 5px 16px;
    height: 44px;
    border: none;
    border-radius: 8px;

    &:focus {
      outline: 2px solid ${COLORS.primary};
    }
  }

  label {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border-radius: 10px;
  width: 418px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(160, 163, 189, 0.1);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

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

// Form validation.
export const ErrorMessage = styled.div`
  background-color: transparent;
  color: ${COLORS.danger};
  font-size: 12px;
  font-style: italic;
  margin: 10px 0 0 5px;
`;

// Buttons.

export const PrimaryButton = styled(Button)`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.primarylt};
  }
`;
