
import { PlusSmallIcon } from '@heroicons/react/20/solid'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { getVehicles } from '@tesla-web/lib/state'
import { SiTesla, SiSnyk } from 'react-icons/si'

const listAvailableVehicles = async () => {
  const data = await getVehicles()
  return data;
}

export default async function Page() {
  
  const { response } = await listAvailableVehicles();
  const name = response[0].display_name;
  const count = response.length;

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6 col-span-1">
            <SiSnyk
              className="h-12 w-auto fill-purple-800"
              alt="Tesla Web"
            />
            /
            <SiTesla
              className="h-12 w-auto fill-red-600"
              alt="Tesla Web"
            />
            <div className='span'>
              <p className="font-thin text-sm">
                This app is for Education &amp; Research, No affiliations!.
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              <LockClosedIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            
          </div>
        </div>
      </header>

      <main>
        <div className="relative isolate overflow-hidden pt-16">
          {/* Secondary navigation */}
          <header className="pb-4 pt-6 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">Total Vehicles</h1>
              <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-900 sm:pl-6 sm:leading-7">
                {count}
              </div>
              {/* Placeholder to manage fleet of car */}
              {/* More for september */}
              <button
                className="ml-auto flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                Manage Fleet
              </button>
              <button
                className="ml-auto flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
                Manage {name}
              </button>
            </div>
          </header>
        </div>
      </main>
    </>
  )
}