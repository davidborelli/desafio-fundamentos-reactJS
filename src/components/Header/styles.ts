import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;

  > a {
    position: relative;
    padding: 10px 0;

    &.active {
      &::after {
        content: '';
        position: absolute;
        background: #ff872c;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export const MenuItem = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  opacity: 0.8;

  &:not(:first-child) {
    margin-left: 32px;
  }
`;
