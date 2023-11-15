import styled from 'styled-components';

export const FormItem = styled('div')(() => {
  return {
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',
    width: '200px',
    marginBottom: '12px',
  };
});
