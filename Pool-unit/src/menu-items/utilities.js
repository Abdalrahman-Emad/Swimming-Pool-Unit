// Import MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PlaceIcon from '@mui/icons-material/Place';
import PoolIcon from '@mui/icons-material/Pool';
import LevelIcon from '@mui/icons-material/Layers';
import LaneIcon from '@mui/icons-material/Directions';
import TrainerIcon from '@mui/icons-material/Person';
import TraineeIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CalendarIcon from '@mui/icons-material/CalendarToday'; // Add this import

// constant
const icons = {
  DashboardIcon,
  PlaceIcon,
  PoolIcon,
  LevelIcon,
  LaneIcon,
  TrainerIcon,
  TraineeIcon,
  AssignmentIcon,
  LocalAtmIcon,
  CalendarIcon // Add the CalendarIcon to the icons object
};

// ==============================|| Tasks MENU ITEMS ||============================== //

const Tasks = {
  id: 'tasks',
  title: 'Tasks',
  type: 'group',
  children: [
    {
      id: 'place',
      title: 'Place',
      type: 'item',
      url: '/utils/place',
      icon: icons.PlaceIcon,
      breadcrumbs: false
    },
    {
      id: 'pool',
      title: 'Pool',
      type: 'item',
      url: '/utils/pool',
      icon: icons.PoolIcon,
      breadcrumbs: false
    },
    {
      id: 'lane',
      title: 'Lane',
      type: 'item',
      url: '/utils/lane',
      icon: icons.LaneIcon,
      breadcrumbs: false
    },
    {
      id: 'levels',
      title: 'Levels',
      type: 'item',
      url: '/utils/level',
      icon: icons.LevelIcon,
      breadcrumbs: false
    },
    {
      id: 'trainer',
      title: 'Trainer',
      type: 'item',
      url: '/utils/trainer',
      icon: icons.TrainerIcon,
      breadcrumbs: false
    },
    {
      id: 'training-types',
      title: 'Training Types',
      type: 'item',
      url: '/utils/training-types',
      icon: icons.AssignmentIcon,
      breadcrumbs: false
    },
    {
      id: 'training-pricing',
      title: 'Training Pricing',
      type: 'item',
      url: '/utils/training-pricing',
      icon: icons.LocalAtmIcon,
      breadcrumbs: false
    },
    {
      id: 'trainee',
      title: 'Trainee',
      type: 'item',
      url: '/utils/trainee',
      icon: icons.TraineeIcon,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'Calendar',
      type: 'item',
      url: '/utils/calendar',
      icon: icons.CalendarIcon, // Use CalendarIcon here
      breadcrumbs: false
    }
  ]
};

export default Tasks;
