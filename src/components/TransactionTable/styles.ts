import styled from 'styled-components'

import { transparentize } from 'polished'

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
`

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  z-index: 2;
  position: absolute;
  background-color: transparent;
  top: 60%;
  left: 50%;
  transform: translate(-60%, -50%);

  img {
    width: 50px;
    height: 50px;
  }
`

export const TableTransaction = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  thead {
    position: relative;
    right: 5%;

    tr {
      color: var(--text-title);
      opacity: 0.4;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: var(--shape);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }

  .data,
  .category {
    color: ${transparentize(0.1, '#969CB3')};
  }
`
