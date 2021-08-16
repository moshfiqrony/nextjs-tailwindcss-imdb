import router from "next/router";
import { protectedRoute } from "../../utils";

const Dashboard = () => {
    return <div>
        <h1>Dashboard</h1>
        <button className='bg-red-200 p-2 pl-5 pr-5 rounded' onClick={() => {
            localStorage.removeItem('token')
            router.push('/')
        }}>Logout</button>
    </div>
}

export default protectedRoute(Dashboard);