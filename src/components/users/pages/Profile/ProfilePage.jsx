import React from 'react';
// import { Query, graphql } from 'react-apollo';

// import Preloader from 'components/common/Preloader';
// import ME_QUERY from '../../graphql/me';
// import UPDATE_EMPLOYEE from '../../graphql/updateEmployee';

// import ProfileFormContainer from './ProfileFormContainer';

// const Profile = ({ updateEmployee }) =>
//   <Query query={ME_QUERY}>
//     {({ data: { me }, loading }) => {
//       if (loading) {
//         return <Preloader />;
//       }

//       return <ProfileFormContainer updateEmployee={updateEmployee} initialValues={me} />;
//     }}
//   </Query>;

// export default graphql(UPDATE_EMPLOYEE, {
//   name: 'updateEmployee',
//   options: {
//     refetchQueries: [{ query: ME_QUERY }]
//   }
// })(Profile);

const ProfilePage = () => {
  const test = '123123';
  return (
    <div>
      this is the profile page { test }
    </div>
  );
};

export default ProfilePage;
