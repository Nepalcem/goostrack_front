import styled from 'styled-components';
import {  Form, Field } from 'formik';
import { BiPencil as Pencil, BiTrash as Trash } from 'react-icons/bi';
import { AiFillStar as Star } from 'react-icons/ai';

export const FeedbackForm=styled(Form)`
max-width: 404px;
height: 285px;`;
export const FeedbackFormLabel=styled.label`
display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);`;


export const FeedbackFormStarInput =styled(Field)`display: none;`;
export const StarContainerWrap=styled.div`
margin-top: 8px;
margin-bottom: 20px;
@media screen and (min-width: 768px) {
   
    margin-bottom: 24px;
  
}`;
export const TextInput =styled(Field)`
padding: 14px 18px;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  margin-bottom: 6px;
  margin-top: 8px;
  border: none;
  resize: none;
  background-color: var(--feedback-background-input);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-text-color);
  outline: none;
  border: 1px solid var(--feedback-border-color);
  ::placeholder{
    color: var(--secondary-text-color);
  }
  &:focus{
  border: 1px solid rgba(255, 255, 255, 0.15);
}
@media screen and (min-width: 768px) {
    width: 100%;
    height: 127px;
    margin-bottom: 10px;
}
`;
 

export const BtnWrap=styled.div`
display: flex;
  gap: 8px;
`

export const BtnSaveOrEdit =styled.button`
position: relative;
  margin-left: auto;
  padding: 0;
  border-radius: 8px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: var(--feedback-btnCancel-background);

  cursor: pointer;
  width: 198px;
  height: 42px;
  &:focus,&:hover{

box-shadow: 4px 2px 16px rgba(87, 96, 104, 0.48);
  background: var(--button-color-hover);
  color: var(--sidebar-background-color);
  }
  @media screen and (min-width: 768px) {
    height: 48px;
}
  
  
  
  
  
  `;



export const BtnCancel=styled.button`
position: relative;
  margin-left: auto;
  padding: 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  background: var(--feedback-btnCancel-background);

  color: var(--secondary-text-color);

  cursor: pointer;
  width: 198px;
  height: 42px;
&:focus,&:hover{
  background: var(--button-color-hover);
  color: var(--sidebar-background-color);
}

@media screen and (min-width: 768px) {
 
    height: 48px;
}

`;
export const LabelAndButtonDiv=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton=styled(Pencil)`
fill: var(--button-color-hover);
  width: 30px;
  height: 30px;

  padding: 8px;
  background: var(--feedback-editBtn-background);
  cursor: pointer;
  border-radius: 50%;
&:focus,&:hover{
  fill: var(--primary-text-color);
  background: var(--nav-button-color-hover);
  padding: 8px;
}

`

export const CancelButton=styled(Trash)`
fill: #ea3d65;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 8px;
  background: var(--feedback-cancelMini-background);

  border-radius: 50%;

 &:focus,&:hover{
  fill: var(--primary-text-color);
  background: #ea3d65;
  padding: 8px;
 }


`






export const StarBtn=styled(Star)`
width: 24px;
height: 24px;
cursor: pointer;
`;