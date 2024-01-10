import styled from 'styled-components';

export const AppWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  overflowX: 'hidden',
  width: '100%',
  height: '100vh'
}))

export const ContentWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  height: '100vh',
  overflow: 'auto',
  alignItems: 'center',
}))