import Input from '../components/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { unprotectedRoute } from '../utils';


function App() {
	const router = useRouter()
	return (
		<div className='h-screen bg-purple-900 flex justify-center items-center'>
			<div className='bg-gray-100 rounded p-6 flex justify-center items-center flex-col 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-2/5 sm:w-1/2 w-2/3 space-y-5'>
				<h1 className='text-2xl'>Welcome to IMDB</h1>
				<div className='space-y-4 text-xs'>
					<Input
						type="email"
						name='email'
						placeholder='Enter email'
					/>
					<Input
						type="password"
						name='password'
						placeholder='Enter password'
					/>
					<Input
						type='password'
						name='confirm-pass'
						placeholder='Enter confirm password'
					/>
				</div>
				<button className='bg-purple-900 text-gray-50 p-2 pl-8 pr-8 rounded font-semibold' onClick={() => router.push('/login')}>Register</button>
				<div className='text-xs'>
					Already registered?
					<Link href='/login'>
						<a className='text-xs text-blue-800 ml-1'>Login</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default unprotectedRoute(App)