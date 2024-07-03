import HomeLayout from "../layouts/HomeLayout";

function Dashboard() {
  return (
    <HomeLayout>
    <div className='bg-[#ffffff] min-h-[90vh] flex justify-center items-center min-w-[83vw] max-w-[83vw]'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
    </div>
    </HomeLayout>
  )
}

export default Dashboard;