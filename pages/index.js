import Dashboard from '../containers/dashboard';
import { protectedRoute } from '../utils';

const App = (props) => {
	return <Dashboard {...props}/>
}

export default protectedRoute(App);
