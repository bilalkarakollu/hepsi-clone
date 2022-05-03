import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0;

  @media ${(props) => props.theme.media.lg} {
    display: none;
  }

`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  color: #484848;
  background-color: #f4f4f4;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 100ms;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #ff6000;
    color: white;
  }
`;

export const Text = styled.span`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
