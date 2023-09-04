import React, { useEffect, useState } from 'react';
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
  FormTextInputs,
} from './AccountForm.styled';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './DatePicker.styled';

import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

// const FileSize = 1024 * 1024; // 1MB

const userValidationSchema = Yup.object().shape({
  // file: Yup.mixed()
  //   .test(
  //     'fileSize',
  //     'File size is too large. Maximum size is 1MB.',
  //     value => !value || (value && value.size <= FileSize)
  //   )
  //   .test(
  //     'fileFormat',
  //     'Only jpeg and png formats are supported.',
  //     value => value && ['image/jpeg', 'image/png'].includes(value.type)
  //   ),
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
  const dispatch = useDispatch();
  const [formattedBirthday, setFormattedBirthday] = useState('');

  useEffect(() => {
    // Check if user.birthday is available and format it
    if (user.birthday) {
      const formatted = format(parseISO(user.birthday), 'yyyy-MM-dd');
      setFormattedBirthday(formatted);
    }
  }, [user.birthday]);

  const submitHandler = (values, actions) => {
    console.log(values);

    const formData = new FormData();

    if (values.file) {
      formData.append('avatarURL', values.file);
    } else if (!user.avatarURL) {
      const defaultAvatarBlob = new Blob([defaultProfileAvatar], {
        type: 'image/png',
      });
      formData.append('avatarURL', defaultAvatarBlob);
    }
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('birthday', format(values.birthday, 'yyyy-MM-dd'));
    formData.append('phone', values.phone);
    formData.append('skype', values.skype);

    dispatch(authOperations.patchCurrentUser(formData));
  };

  return (
    <AccountPageContainer>
      {/* <UserAvatarPlus>
        <AccountPageAvatar
          alt="Plus"
          src={user.avatar || defaultProfileAvatar}
        />
        <AccountAvatarPlusIcon src={userAvatarPlusIcon} />
      </UserAvatarPlus> */}

      <Formik
        initialValues={{
          file: null,
          username: user.username,
          birthday: formattedBirthday || new Date(),
          email: user.email,
          phone: user.phone || '+380931112233',
          skype: user.skype || 'SkypeNumber',
        }}
        validationSchema={userValidationSchema}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <StyledForm>
            <div className="centered-element">
              {/* Hidden file input */}
              <UserAvatarPlus>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={event => {
                    setFieldValue('file', event.currentTarget.files[0]);
                  }}
                />
                <label htmlFor="fileInput">
                  <AccountPageAvatar
                    alt="Avatar"
                    src={
                      values.file
                        ? URL.createObjectURL(values.file)
                        : user.avatarURL || defaultProfileAvatar
                    }
                  />
                  <AccountAvatarPlusIcon src={userAvatarPlusIcon} />
                </label>
              </UserAvatarPlus>
              <ErrorMessageStyled
                name="fileInput"
                component="div"
                className="error-message"
              />

              <AccountUserName>
                <AccountUserNameTitle>{user.username}</AccountUserNameTitle>
                <AccountUserNameRole>User</AccountUserNameRole>
              </AccountUserName>
            </div>

            <FormTextInputs>
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
                      <DatePicker
                        {...field}
                        calendarStartDay={1}
                        // selected={values.birthday}
                        // selected={field.value}
                        selected={new Date(values.birthday)}
                        onChange={date => {
                          setFieldValue('birthday', date);
                          console.log('Selected Date:', date);
                          // console.log(typeof(date));
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
            </FormTextInputs>
          </StyledForm>
        )}
      </Formik>
    </AccountPageContainer>
  );
};

export default AccountPageLayout;
