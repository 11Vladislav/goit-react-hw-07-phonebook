import styled from 'styled-components';

export const ContactListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 500px;
  `;

  export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-left: 50px;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
    }
  `;

  export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 380px;
    `;

    export const Contact = styled.div`
      padding: 5px;
      width: 240px;
      font-size: 16px;
      font-weight: 600;
      `;