import { styled } from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.primary};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    filter: drop-shadow(0 0 2em ${({ theme }) => theme.palette.primary.dark});
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.palette.primary.light};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    cursor: not-allowed;
  }
`;
