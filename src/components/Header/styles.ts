import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    transition: all 0.5s ease;
    position: relative;

    &:hover {
      animation-name: rotateMoney;
      animation-duration: 4s;
      animation-iteration-count: 2;
      animation-direction: alternate-reverse;
    }
  }

  @keyframes rotateMoney {
    0% {
      transform: rotate(360deg) scale(0.9);
    }

    50% {
      transform: rotate(0) scale(1.1);
    }

    100% {
      transform: rotate(720deg) scale(0.9);
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
