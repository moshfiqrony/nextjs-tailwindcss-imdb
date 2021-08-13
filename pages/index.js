import Input from '../components/Input';

export default function App() {
	return (
		<div className='h-screen bg-purple-900 flex justify-center items-center'>
			<div className='bg-gray-100 rounded p-6 flex justify-center items-center flex-col w-1/2 space-y-5'>
				<h1 className='text-2xl'>IMDB</h1>
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
				<button className='bg-purple-900 text-gray-50 p-2 pl-8 pr-8 rounded font-semibold hover: shadow-inner'>Submit</button>
			</div>
		</div>
	)
}
