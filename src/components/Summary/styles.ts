import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background-color: var(--shape);
    color: var(--text-title);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`
