import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import defaultProfileAvatar from '../../images/accountPage/default-profile-avatar.png';
import userAvatarPlusIcon from '../../images/accountPage/userAvatarPlus.svg';
import {
  AccountPageContainer,
  AccountPageAvatar,
  UserAvatarPlus,
  AccountAvatarPlusIcon,
  AccountUserName,
  AccountUserNameTitle,
  AccountUserNameRole
} from './AccountPageLayout.styled';

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
          birthday: '25/08/1995',
          email: 'nadiia@gmail.com',
          phone: '38 (097) 256 34 77',
          skype: 'Add a skype number',
        }}
        validationSchema={userValidationSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ values, setFieldValue }) => (
          <Form className="blocks">
            <div className="form-field">
              <label htmlFor="userName">User Name</label>
              <Field type="text" name="userName" id="userName" />
              <ErrorMessage
                name="userName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="birthday">Birthday</label>
              <Field type="text" name="birthday" id="birthday" />
              <ErrorMessage
                name="birthday"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" id="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <Field type="text" name="phone" id="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="skype">Skype</label>
              <Field type="text" name="skype" id="skype" />
              <ErrorMessage
                name="skype"
                component="div"
                className="error-message"
              />
            </div>

            <div className="submit">
              <div className="submit-wrapper">
                <button type="submit" className="form-button">
                  Save changes
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </AccountPageContainer>
  );
};

export default AccountPageLayout;
