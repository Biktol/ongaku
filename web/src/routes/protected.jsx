// import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppLayout } from '@/features/app';
import { useAuthStore } from '@/stores/useAuthStore';
import { lazyImport } from '@/utils/lazyImport';

const { Welcome } = lazyImport(() => import('@/features/misc'), 'Welcome');
const { VerifyEmail } = lazyImport(() => import('@/features/auth'), 'VerifyEmail');
const { ResendVerificationEmail } = lazyImport(
  () => import('@/features/auth'),
  'ResendVerificationEmail'
);
const { Home } = lazyImport(() => import('@/features/app'), 'Home');
const { Queue } = lazyImport(() => import('@/features/app'), 'Queue');
const { Library } = lazyImport(() => import('@/features/app'), 'Library');
const { Explore } = lazyImport(() => import('@/features/app'), 'Explore');
const { Rooms } = lazyImport(() => import('@/features/app'), 'Rooms');
const { Room } = lazyImport(() => import('@/features/app'), 'Room');

export const protectedRoutes = [
  {
    element: <VerifiedEmailWrapper />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/queue',
            element: <Queue />,
          },
          {
            path: '/library',
            element: <Library />,
          },
          {
            path: '/explore',
            element: <Explore />,
          },
          {
            path: '/rooms',
            element: <Rooms />,
          },
          {
            path: '/room/:id',
            element: <Room />,
          },
        ],
      },
    ],
  },
  {
    path: '/verify/:hash',
    element: <VerifyEmail />,
  },
];

function VerifiedEmailWrapper() {
  const entity = useAuthStore((s) => s.entity);
  return (
    <>
      {/* <React.Suspense fallback={<LoadingFallback />}> */}
      {!entity.verifiedEmail && <ResendVerificationEmail />}
      <Outlet />
      {/* </React.Suspense> */}
    </>
  );
}

// function LoadingFallback() {
//   return (
//     <Box textAlign="center" paddingTop="200px" overflow="hidden">
//       <Spinner size="xl" />
//     </Box>
//   );
// }
