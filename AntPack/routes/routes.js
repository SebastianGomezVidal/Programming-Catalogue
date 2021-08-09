import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

/* Importing the main screens of this project */
import Home from '../screens/contactList';
import Employee from '../screens/employeeInfo';

/* Registering these screens on an onject */
const screens = {
  Home: {
    screen: Home,
  },
  UserDetails: {
    screen: Employee,
  },
};

/*Stacking the screens*/
const routeStack = createStackNavigator(screens);

/*Wrapping the stack in a Container*/
export default createAppContainer(routeStack);
