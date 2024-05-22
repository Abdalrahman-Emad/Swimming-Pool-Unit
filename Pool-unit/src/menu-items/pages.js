import { IconLogin } from '@tabler/icons-react';
import { IconRegistered } from '@tabler/icons-react';
import { IconKey } from '@tabler/icons-react'; 


// Constants for icons
const icons = {
  LoginIcon: IconLogin, // Replace IconLogin with the icon component for Login
  RegisterIcon: IconRegistered, // Replace IconRegistered with the icon component for Register
  ResetPasswordIcon: IconKey // Replace IconKey with the icon component for Reset Password
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.LoginIcon,
      children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/login',
          icon: icons.LoginIcon, // Unique icon for Login
          target: false
        },
        {
          id: 'register',
          title: 'Register',
          type: 'item',
          url: '/register',
          icon: icons.RegisterIcon, // Unique icon for Register
          target: false
        },
        // {
        //   id: 'reset-password',
        //   title: 'Reset Password',
        //   type: 'item',
        //   url: '/reset-password',
        //   icon: icons.ResetPasswordIcon, // Unique icon for Reset Password
        //   target: false
        // }
      ]
    }
  ]
};

export default pages;
