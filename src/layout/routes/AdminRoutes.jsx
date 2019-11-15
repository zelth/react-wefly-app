// import React from 'react';
// import { Route } from 'react-router-dom';

// // All routes from section below is grouped, 
// // So if you wanna see all routes you should to look into these files
// import UsersRoutes from 'components/users/UsersRoutes';
// import OrganisationsRoutes from 'components/organisations/OrganisationsRoutes';
// import FilesRoutes from 'components/files/FilesRoutes';
// import SuppliersRoutes from 'components/suppliers/SuppliersRoutes';
// import DocumentsRoutes from 'components/documents/DocumentsRoutes';
// import RequestsRoutes from 'components/requests/RequestsRoutes';

// import InviteOrganisation from 'components/admin/organisations/InviteOrganisation';
// import CreateOrganisation from 'components/admin/organisations/CreateOrganisation';

// const AdminRoutes = [
//   { component: InviteOrganisation, path: '/admin/organisations/invite' },
//   { component: CreateOrganisation, path: '/admin/organisations/create' },

//   { component: OrganisationsRoutes, path: '/organisations' },
//   { component: UsersRoutes, path: '/users' },
//   { component: RequestsRoutes, path: '/requests' },
//   { component: DocumentsRoutes, path: '/documents' },
//   { component: SuppliersRoutes, path: '/suppliers' },
//   { component: FilesRoutes, path: '/files' }
// ];

// export default AdminRoutes.map(route => React.createElement(Route, { ...route, key: route.path }));