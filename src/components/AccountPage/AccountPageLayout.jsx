import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import defaultProfileAvatar from '../../images/accountPage/account-avatar-ellipse.svg';
import userAvatarPlusIcon from '../../images/accountPage/userAvatarPlus.svg';
import {
  AccountPageContainer,
  AccountPageAvatar,
  UserAvatarPlus,
  AccountAvatarPlusIcon,
  AccountUserName,
  AccountUserNameTitle,
  AccountUserNameRole,
} from './AccountPageLayout.styled';

import {
  StyledForm,
  FormField,
  AccountSaveButton,
  ErrorMessageStyled,
} from './AccountForm.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

const userValidationSchema = Yup.object().shape({
  userName: Yup.string().required('User Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  birthday: Yup.string(),
  phone: Yup.string(),
  skype: Yup.string(),
});
//Formik initial values will be taken from db User
const AccountPageLayout = () => {
  return (
    <AccountPageContainer>
      {/* Profile image border on hover and plus icon as a pseudo for .plus */}
      <UserAvatarPlus>
        <AccountPageAvatar alt="Plus" src={defaultProfileAvatar} />
        <AccountAvatarPlusIcon src={userAvatarPlusIcon} />
      </UserAvatarPlus>
      <AccountUserName>
        <AccountUserNameTitle>Nadiia Doe</AccountUserNameTitle>
        <AccountUserNameRole>User</AccountUserNameRole>
      </AccountUserName>

      <Formik
        initialValues={{
          userName: 'Nadiia Doe',
          birthday: new Date('1995-08-25'),
          email: 'nadiia@gmail.com',
          phone: '38 (097) 256 34 77',
          skype: 'Add a skype number',
        }}
        validationSchema={userValidationSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        // validateOnBlur={false}
        // validateOnChange={false}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <StyledForm>
            <FormField
              error={errors.userName}
              valid={touched.userName && !errors.userName}
            >
              <label htmlFor="userName">User Name</label>
              <Field
                type="text"
                name="userName"
                id="userName"
                className={
                  errors.userName && touched.userName
                    ? 'error'
                    : touched.userName && !errors.userName
                    ? 'valid'
                    : ''
                }
              />
              <ErrorMessageStyled
                name="userName"
                component="div"
                className="error-message"
              />
            </FormField>

            <FormField>
              <label htmlFor="birthday">Birthday</label>
              <Field name="birthday">
                {({ field }) => (
                  <DatePicker
                    {...field}
                    selected={values.birthday}
                    onChange={date => {
                      setFieldValue('birthday', date);
                      console.log('Selected Date:', date); // Log the selected date
                    }}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              </Field>
              <ErrorMessageStyled
                name="birthday"
                component="div"
                className="error-message"
              />
            </FormField>

            <FormField
              error={errors.email}
              valid={touched.email && !errors.email}
            >
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                className={
                  errors.email && touched.email
                    ? 'error'
                    : touched.email && !errors.email
                    ? 'valid'
                    : ''
                }
              />
              <ErrorMessageStyled
                name="email"
                component="div"
                className="error-message"
              />
            </FormField>

            <FormField
              error={errors.phone}
              valid={touched.phone && !errors.phone}
            >
              <label htmlFor="phone">Phone</label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className={
                  errors.phone && touched.phone
                    ? 'error'
                    : touched.phone && !errors.phone
                    ? 'valid'
                    : ''
                }
              />
              <ErrorMessageStyled
                name="phone"
                component="div"
                className="error-message"
              />
            </FormField>

            <FormField
              error={errors.skype}
              valid={touched.skype && !errors.skype}
            >
              <label htmlFor="skype">Skype</label>
              <Field
                type="text"
                name="skype"
                id="skype"
                className={
                  errors.skype && touched.skype
                    ? 'error'
                    : touched.skype && !errors.skype
                    ? 'valid'
                    : ''
                }
              />
              <ErrorMessageStyled
                name="skype"
                component="div"
                className="error-message"
              />
            </FormField>

            <AccountSaveButton type="submit">Save changes</AccountSaveButton>
          </StyledForm>
        )}
      </Formik>
    </AccountPageContainer>
  );
};

export default AccountPageLayout;
