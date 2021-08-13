import {storeLocalStorage} from '../utils/index';

export default function Home() {
	storeLocalStorage('user_token', 'rony');
	return (
		<div>Welcome to next app</div>
	)
}
