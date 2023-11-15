import styled from 'styled-components';

export const Form = styled('form')(() => {
  return {
    padding: '20px 0',
    '& button': {
      fontSize: '14px',
      cursor: 'pointer',
    },
  };
});
