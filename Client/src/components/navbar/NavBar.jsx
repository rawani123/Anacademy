import { Disclosure} from '@headlessui/react'
import { Link } from 'react-router-dom'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center text-purple-600 text-3xl italic hover:text-purple-600">
                  Anacademy
                </Link>
              </div>
              <div className="flex gap-5 text-white">
                <Link to="signup" className=' border-purple-600 border-2 hover:bg-purple-500 hover:text-white hover:shadow-white hover:shadow-md py-2 px-5 rounded-3xl'>
                    Signup
                </Link>
                <Link to="login" className=' border-purple-600 hover:bg-purple-500 hover:text-white hover:shadow-white hover:shadow-md border-2 py-2 px-14 rounded-3xl'>
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
