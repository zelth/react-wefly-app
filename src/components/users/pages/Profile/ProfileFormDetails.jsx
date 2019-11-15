import React from 'react';

import Input from 'components/common/inputs/Input';
import Select from 'components/common/inputs/Select';
import Button from 'components/common/buttons/Button';
import { rolesOptions } from 'helpers/roles';
import UserImage from 'components/common/avatars/UserImage';

const ProfileFormDetails = ({
  firstName, lastName, email, organisationPrimaryRole, phone, picture,
  errors, isSubmitting, handleChange, handleSubmit 
}) =>
  <form className="update-form" onSubmit={handleSubmit}>
    <div className="row-flex-start">
      <div className="user-image__outer flex-1 margin-right-35"><UserImage image={picture} /></div>

      <div className="update-form__form column-flex-start flex-2">
        <div className="row-flex-start">
          <Input
            wrapperClassName="flex-1 margin-right-35"
            disabled={isSubmitting}
            // disabled
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={firstName}
            error={errors.firstName}
          />
          <Input
            wrapperClassName="flex-1 margin-right-35"
            disabled={isSubmitting}
            // disabled
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={lastName}
            error={errors.lastName}
          />
        </div>
        
        <div className="row-flex-start">
          <Input
            wrapperClassName="flex-1 margin-right-35"
            // disabled={isSubmitting}
            disabled
            label="Email"
            name="email"
            onChange={handleChange}
            value={email}
            error={errors.email}
          />

          <Select
            wrapperClassName="flex-1 margin-right-35"
            isDisabled
            // isDisabled={isSubmitting}
            label="Role"
            name="organisationPrimaryRole"
            options={rolesOptions}
            onChange={handleChange}
            value={organisationPrimaryRole}
            error={errors.organisationPrimaryRole}
          />
        </div>
        
        <div className="row-flex-start">

          <Input
            wrapperClassName="flex-1 margin-right-35"
            // disabled={isSubmitting}
            disabled
            label="Phone"
            name="phone"
            onChange={handleChange}
            value={phone}
            error={errors.phone}
          />

          <div className="flex-1 margin-right-35">
            <Button
              value="Update"
              buttonType="primary"
              type="submit"
              noFill
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>

  </form>;

export default ProfileFormDetails;