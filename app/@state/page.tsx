export default function Page() {
  const stats = [
    { id: 1, name: 'Charge limit', value: '80%' },
    { id: 2, name: 'Cabin Temperature', value: '13' },
    { id: 3, name: 'Outside Temperature', value: '13' },
    { id: 4, name: 'Battery Range', value: '560km' },
    { id: 5, name: 'State', value: 'Online' },
    { id: 6, name: 'Odometer', value: '7855', bgColor: 'bg-blue-600', textColor: 'text-gray-50', subTextColor: 'text-gray-300'},
    { id: 7, name: 'State', value: 'Online' },
    { id: 8, name: 'Charging State', value: 'Disconnected', bgColor: 'bg-red-500', textColor: 'text-gray-50', subTextColor: 'text-gray-300'}
  ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              State
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Car state is displayed below
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className={`flex flex-col ${stat.bgColor? stat.bgColor: 'bg-gray-200'} p-8`}>
                <dt className={`text-sm font-semibold leading-6 ${stat.subTextColor? stat.subTextColor: 'text-slate-950'}`}>{stat.name}</dt>
                <dd className={`order-first text-3xl font-semibold tracking-tight ${stat.textColor? stat.textColor: 'text-slate-950'}`}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export const revalidate = 100;
export const runtime = 'edge';