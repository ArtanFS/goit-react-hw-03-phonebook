import styled from 'styled-components';

export const ListItem = styled('li')(() => {
  return {
    marginBottom: '8px',
    '& div': {
      display: 'flex',
      gap: '12px',
    },
    '& div>button': {
      fontSize: '14px',
      cursor: 'pointer',
    },
  };
});
