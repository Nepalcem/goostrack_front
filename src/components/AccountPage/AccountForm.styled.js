import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: flex-start;
gap:18px;
margin: 18px;
`;

export const FormField = styled.div`
display:flex;
flex-direction: column;
gap: 8px;
& input {
    min-width: 300px;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(18/14);
}
& label {
    font-size:12px;
    line-height: calc(14/12);
    font-family: Inter;
}
`;