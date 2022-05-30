/* eslint-disable @typescript-eslint/no-explicit-any */

import { EyeIcon } from '@heroicons/react/outline'
import Image from 'next/image'

interface PseudoProps {
  title: string
  subtitle: string
  image: any
  username: string
  date: string
  views: number
  tags: string[]
}

const PseudoCard = ({
  title,
  subtitle,
  image,
  username,
  date,
  views,
  tags,
}: PseudoProps) => (
  <div className="bg-white w-96 h-36 rounded shadow-lg p-4">
    <div className="flex justify-between">
      <div className="text-xl">{title}</div>
      <div className="flex items-center">
        <Image
          className="rounded"
          width={24}
          height={24}
          src={image}
          alt={username}
        />
        <span className="ml-2">@{username}</span>
      </div>
    </div>
    <div className="text-gray-400 text-sm flex justify-between">
      <span>
        {subtitle} | {date}
      </span>
      <span className="flex items-center">
        <EyeIcon className="mx-1" /> {views}
      </span>
    </div>
    <div className="text-center text-blue-400 underline cursor-pointer">
      open flow
    </div>
    <div className="flex justify-center px-6 pt-4 pb-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

export default PseudoCard
