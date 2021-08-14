import Link from 'next/link';
import router from 'next/router';
import Input from '../components/Input';

export default function App() {
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
				</div>
				<button className='bg-purple-900 text-gray-50 p-2 pl-8 pr-8 rounded font-semibold hover: shadow-inner' onClick={() => router.push('/dashboard')}>Login</button>
				<div className='text-xs'>
				Need an account?
				<Link href='/register'>
					<a className='text-xs text-blue-800 ml-1'>Register</a>
				</Link>
			</div>
			</div>
		</div>
	)
}
