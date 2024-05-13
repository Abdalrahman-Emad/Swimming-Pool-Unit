import { lazy } from 'react';
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import TrainingTypes from '../views/utilities/TrainingTypes';
import TrainingPricing from '../views/utilities/TrainingPricing';
import Login from '../views/pages/Auth/Login'; 
import Register from '../views/pages/Auth/Register';

// Lazy-loaded components
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard')));
const Lane = Loadable(lazy(() => import('../views/utilities/Lane')));
const Trainer = Loadable(lazy(() => import('../views/utilities/Trainer')));
const Trainee = Loadable(lazy(() => import('../views/utilities/Trainee')));
const Pool = Loadable(lazy(() => import('../views/utilities/Pool')));
const Level = Loadable(lazy(() => import('../views/utilities/Level')));
const Place = Loadable(lazy(() => import('../views/utilities/Place')));

// Main routes definition
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'pool',
          element: <Pool />
        },
        {
          path: 'lane',
          element: <Lane />
        },
        {
          path: 'place',
          element: <Place />
        },
        {
          path: 'trainer',
          element: <Trainer />
        },
        {
          path: 'trainee',
          element: <Trainee />
        },
        {
          path: 'level',
          element: <Level />
        },
        {
          path: 'training-types',
          element: <TrainingTypes/>
        },
        {
          path: 'training-pricing',
          element: <TrainingPricing/>
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    },
  ]
};

export default MainRoutes;
