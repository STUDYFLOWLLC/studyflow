import Skeleton from 'react-loading-skeleton'

export default function LoadingLine() {
  return (
    <tr>
      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium ">
        <div className="flex items-center space-x-3 lg:pl-2">
          <Skeleton circle width={10} height={10} />
          <a href="#" className="truncate transition-colors">
            <Skeleton width={350} />
          </a>
        </div>
      </td>
      <td className="w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right">
        <Skeleton width={100} />
      </td>
      <td className="w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right">
        <Skeleton width={60} />
      </td>
      <td className="relative items-center px-6 py-3 text-right text-sm font-medium ">
        <Skeleton width={50} />
      </td>
    </tr>
  )
}
