import HomeLayout from "../layouts/HomeLayout"

function NotFound() {
  return (
    <HomeLayout>
    <div className='flex justify-center items-center bg-white min-w-[83vw] max-w-[83vw]'>
        <div className='flex justify-center items-center bg-black rounded-lg'>
            <h1 className='text-9xl text-white'>404</h1>
            <h5 className='text-orange-900 text-2xl'>Not Found</h5>
        </div>
    </div>
    </HomeLayout>
  )
}

export default NotFound