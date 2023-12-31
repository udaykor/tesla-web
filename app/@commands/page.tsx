import { getVehicles } from '@tesla-web/lib/state';


async function getData() {
  const data = await getVehicles()
  return data;
}


export default async function Page() {
  const data = await getData();

  const executeCommand = (command: string) => {
    switch(command) {
      case 'trunk-pop':
        break;
      case 'trunk-close':
        break;
      case 'honk':
        break;
      default:
        break;
    }
  }

  const commands = [
    { id: 1, name: 'Beep!', value: "Primary horn", bgColor: 'bg-blue-600', textColor: 'text-gray-50', subTextColor: 'text-gray-200', cmd: 'honk' },
    { id: 2, name: 'Bam!', value: "Actuate Trunk", bgColor: 'bg-red-400', textColor: 'text-gray-50', subTextColor: 'text-gray-200', cmd: 'honk' },
    { id: 3, name: 'Wink 😉', value: "Flash lights", bgColor: 'bg-gray-200', textColor: 'text-gray-950', subTextColor: 'text-gray-900', cmd: 'honk' },
    { id: 4, name: 'Powered by Snyk+NextJS', value: "Remote drive", bgColor: 'bg-purple-600', textColor: 'text-gray-50', subTextColor: 'text-gray-200', cmd: 'honk' },
  ]
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Commands
            </h2>
          </div>
          <dl key={`commands-list-${data.response[0].id}`} className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {commands.map((stat) => (
              <button key={`btn-${stat.id}`} type='button'>
                <div key={stat.id} className={`flex flex-col ${stat.bgColor? stat.bgColor: 'bg-gray-200'} p-8`}>
                  <dt className={`text-sm font-semibold leading-6 ${stat.subTextColor? stat.subTextColor: 'text-slate-950'}`}>{stat.name}</dt>
                  <dd className={`order-first text-3xl font-semibold tracking-tight ${stat.textColor? stat.textColor: 'text-slate-950'}`}>{stat.value}</dd>
                </div>
              </button>
            ))}
          </dl>
          <div className='mt-5'>
            <p className="font-medium">
              This section will be updated for Sep webinar as part of the Masterclass series
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
