import { FormContainer } from './RegisterForm.styled';

const RegisterForm = () => {
  const onSubmitForm = e => {};

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <h2>Sign Up</h2>
        Name:
        <input type="name" name="name" required />
        Email:
        <input type="email" name="email" required />
        Password:
        <input type="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
