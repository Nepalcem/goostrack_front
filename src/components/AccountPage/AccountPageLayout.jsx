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

import { format, parseISO } from 'date-fns';

import {
  StyledForm,
  FormField,
  AccountSaveButton,
  ErrorMessageStyled,
} from './AccountForm.styled';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './DatePicker.styled';

import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const userValidationSchema = Yup.object().shape({
  username: Yup.string().required('User Name is required'),
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

  const parsedBirthday = parseISO(user.birthday);
  const formattedBirthday = format(parsedBirthday, 'yyyy-MM-dd');

  const dispatch = useDispatch();

  const submitHandler = (values, actions) => {
        const userData = {
      ...values,
      birthday: format(values.birthday, 'yyyy-MM-dd'),
    };

    dispatch(authOperations.patchCurrentUser(userData));
  };

  return (
    <AccountPageContainer>
      <UserAvatarPlus>
        <AccountPageAvatar
          alt="Plus"
          src={user.avatar || defaultProfileAvatar}
        />
        <AccountAvatarPlusIcon src={userAvatarPlusIcon} />
      </UserAvatarPlus>
      <AccountUserName>
        <AccountUserNameTitle>{user.username}</AccountUserNameTitle>
        <AccountUserNameRole>User</AccountUserNameRole>
      </AccountUserName>

      <Formik
        initialValues={{
          username: user.username,
          birthday: user.birthday ? formattedBirthday : new Date('1995-08-25'),
          email: user.email,
          phone: user.phone || '111-222-33',
          skype: user.skype || 'Add a skype number',
        }}
        validationSchema={userValidationSchema}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <StyledForm>
            <FormField
              error={errors.username}
              valid={touched.username && !errors.username}
            >
              <label htmlFor="username">User Name</label>
              <Field
                type="text"
                name="username"
                id="username"
                className={
                  errors.username && touched.username
                    ? 'error'
                    : touched.username && !errors.username
                    ? 'valid'
                    : ''
                }
              />
              <ErrorMessageStyled
                name="username"
                component="div"
                className="error-message"
              />
            </FormField>

            <FormField>
              <label htmlFor="birthday">Birthday</label>
              <Field name="birthday">
                {({ field }) => (
                  <>
                  {console.log('Formatted Birthday:', formattedBirthday)}
                    <DatePicker
                      {...field}
                      calendarStartDay={1}
                      // selected={values.birthday}
                      // selected={field.value}
                      selected={new Date(values.birthday)}
                      onChange={date => {
                        setFieldValue('birthday', date);
                        console.log(
                          'Selected Date:', date);
                        //   format(date, 'yyyy-MM-dd')
                        // ); // Log the selected date
                      }}
                      dateFormat="yyyy-MM-dd"
                     
                    />
                    <CalendarGlobalStyles />
                  </>
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
            <div className="spacer"></div>
            <AccountSaveButton type="submit">Save changes</AccountSaveButton>
          </StyledForm>
        )}
      </Formik>
    </AccountPageContainer>
  );
};

export default AccountPageLayout;
