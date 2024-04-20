import styled from "styled-components";

export const ItemCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 16px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
    -webkit-box-shadow: 0px 0px 24px -5px rgba(66, 68, 90, 1);
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageCartContainer = styled.div`
  display: flex;
`;

export const TextCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 80px;
  left: 0;
  background-color: #ffffffdb;
  min-height: 52px;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const IDCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  white-space: pre;
  font-weight: 800;
  margin: 0 16px;
  border-radius: 0 0 8px 0;
  background-color: #ffffffdb;
  @media (max-width: 800px) {
    margin: 8px 0;
  }
`;

export const NameCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  padding: 8px;
`;

export const PriceCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 8px;
  font-size: 13px;
  text-align: center;
  strong {
    font-size: 16px;
  }
`;

export const RemoveFromTheCartBtnCart = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 200px;
  height: 40px;
  margin: 0 16px;
  z-index: 1;
  border: none;
  background-color: #ffffff;
  color: #ff0000;
  border: 2px solid #ff0000;
  font-weight: 600;
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: "";
    background: #ffffffdb;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active::after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:hover {
    color: #000000;
  }
`;

export const ItemsCartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 24px;
  height: 24px;
  padding: 0 16px;
  margin: 0 8px;
  background: #bbbbbb;
  font-weight: 600;
  z-index: 2;
  &:empty {
    display: none;
  }
  @media (max-width: 800px) {
    margin: 8px 0;
  }
`;
