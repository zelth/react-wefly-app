import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import ProfileForm from './ProfileForm';

const ProfileFormContainer = ({ initialValues, updateEmployee }) => (
  <div className="profile-page">
    <Formik
      onSubmit={({ firstName, lastName }, actions) => {

        const variables = {
          input: {
            employeeId: initialValues.employee._id,
            firstName,
            lastName
          }
        };

        updateEmployee({ variables })
          .finally(() => actions.setSubmitting(false));
      }}
      validationSchema={yup.object().shape({
        firstName: yup.string(),
        lastName: yup.string(),
        email: yup.string().email()
      })}
      initialValues={{
        firstName: initialValues.employee.firstName || '',
        lastName: initialValues.employee.lastName || '',
        email: initialValues.employee.email || '',
        // phone: initialValues.employee.phone || '', 
        picture: initialValues.employee.picture
      }}
      render={props => <ProfileForm {...props} />}
    />
  </div>
);

export default ProfileFormContainer;