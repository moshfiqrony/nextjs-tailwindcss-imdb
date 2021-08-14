import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import {getLocalStorage} from '../utils';

export default function App() {
	const router = useRouter();
	useEffect(() => {
		getLocalStorage('token') ? router.push('/login') : router.push('/register')
	})
	return null
}
