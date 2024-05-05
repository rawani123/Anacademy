import { Disclosure} from '@headlessui/react'
import { Link } from 'react-router-dom'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#012641]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center text-white text-3xl italic hover:text-white
                ">
                  Anacademy
                </Link>
              </div>
              <div className="flex gap-5 text-white">
                <Link to="/signup-as" className=' border-purple-600 border-2 hover:bg-[#60B3D1] hover:text-white hover:shadow-white hover:shadow-md py-2 px-5 rounded-3xl'>
                    Signup
                </Link>
                <Link to="/login" className=' border-purple-600 hover:bg-[#60B3D1] hover:text-white hover:shadow-white hover:shadow-md border-2 py-2 px-14 rounded-3xl'>
                    Login
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
