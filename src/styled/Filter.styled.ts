import styled from "styled-components";

export const Body = styled.div`
  margin-top: 8px;
`;

export const TitleContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.32px;
  color: #000;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

export const FilterLabel = styled.label`
  padding: 14px 8px;
  padding-left: 0px;
  font-size: 20px;
  color: #9b9ba4;
`;

export const FilterInput = styled.input`
  flex: 1;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #ff6000;
  border: none;
  width: calc(100% - 40px);
  background: rgba(0, 0, 0, 0);

  &::focus {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #9b9ba4;
  }
`;

export const CheckboxContainer = styled.div`
  max-height: 242px;
  min-height: 50px;
  overflow: auto;
  overflow-x: hidden;
  position: relative;

  &:hover::-webkit-scrollbar-thumb {
    background-color: #9b9b9b;
  }
  &::-webkit-scrollbar {
    background: #f5f5f5;
    border-radius: 3px;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 3px;
  }
`;

export const CheckboxContainerShadow = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 40px;
  width: 100%;
  position: sticky;
  bottom: 0;
`;

export const BoxContainer = styled.div`
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  &:hover {
    color: #ff6000;
  }
`;

export const BoxContainerItem = styled.label`
  user-select: none;
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  outline: none;
  position: relative;
  height: 20px;
  width: 20px;
  accent-color: #ff6000;
  border: 2px solid rgb(155, 155, 155);
  border-radius: 6.7px;
`;

export const CheckboxText = styled.div`
  padding: 0px 10px;
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.28px;
  color: #484848;
  word-wrap: break-word;
`;
