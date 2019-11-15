import React from 'react';

import ProfileFormDetails from './ProfileFormDetails';

const ProfileForm = ({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
  <div className="form">
    <h5 className="page-title">Profile Settings</h5>

    <ProfileFormDetails
      firstName={values.firstName}
      lastName={values.lastName}
      email={values.email}
      organisationPrimaryRole={values.organisationPrimaryRole}
      phone={values.phone}
      picture={values.picture}
      isSubmitting={isSubmitting}

      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  </div>
);

export default ProfileForm;