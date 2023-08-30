import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import defaultProfileAvatar from '../../images/accountPage/tablet-avatar-icon.png';
import userAvatarPlusIcon from '../../images/accountPage/plus-tablet.svg';
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
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatePicker } from './DatePicker.styled';

import { useSelector } from 'react-redux';

const userValidationSchema = Yup.object().shape({
  userName: Yup.string().required('User Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must contain only Latin characters'
    ),
  birthday: Yup.string(),
  //phone pattern .matches(/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/, `Phone must contain valid characters`)
  phone: Yup.string(),
  skype: Yup.string(),
});

const AccountPageLayout = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <AccountPageContainer>
      <UserAvatarPlus>
        <AccountPageAvatar alt="Plus" src={user.avatar || defaultProfileAvatar} />
        <AccountAvatarPlusIcon src={userAvatarPlusIcon} />
      </UserAvatarPlus>
      <AccountUserName>
        <AccountUserNameTitle>{user.username}</AccountUserNameTitle>
        <AccountUserNameRole>User</AccountUserNameRole>
      </AccountUserName>

      <Formik
        initialValues={{
          userName: user.username,
          birthday: user.birthday || new Date('1995-08-25'),
          email: user.email,
          phone: user.phone || '111-222-33',
          skype: user.skype || 'Add a skype number',
        }}
        validationSchema={userValidationSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
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
                  <StyledDatePicker
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
            <div class="spacer"></div>
            <AccountSaveButton type="submit">Save changes</AccountSaveButton>
          </StyledForm>
        )}
      </Formik>
    </AccountPageContainer>
  );
};

export default AccountPageLayout;
