/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Popover } from '@headlessui/react'
import {
  BeakerIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import logo from 'images/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const solutions = [
  {
    name: 'Introducing Studyflows',
    description:
      'Studyflow will automatically create a flow, flashcard stack, and a science-based review schedule for each of the notes you take.',
    href: '#',
    icon: BeakerIcon,
  },
  {
    name: 'Flows & Flashcards',
    description:
      "It's time to drop Google Docs. Embed flashcards, a review schedule, lecture audio, and videos right into your flows with our revolutionary text editor.",
    href: '#',
    icon: PencilSquareIcon,
  },
  {
    name: 'Student-first task management',
    description:
      'Modern task managers only care about selling to mega corporations. We care about students. Effortlessly create tasks for projects, homeworks, and studying.',
    href: '#',
    icon: CheckCircleIcon,
  },

  {
    name: 'Social Learning',
    description:
      'No one ever learned anything on Chegg. Studyflow offers a learning, not cheating-based note sharing platform. Coming Soon.',
    href: '#',
    icon: UserGroupIcon,
  },
]

export default function index() {
  const router = useRouter()

  return (
    <div className="bg-base-100">
      <header>
        <Popover className="relative bg-base-100">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-2 py-3 sm:px-3 md:justify-start md:space-x-10 lg:px-4">
            <div className="flex justify-start items-center">
              <a href="#">
                <div className="w-10 h-10 mr-2">
                  <Image src={logo} alt="wave" />
                </div>
              </a>
              <div className="text-4xl font-semibold text-primary">
                Studyflow
              </div>
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                type="button"
                className="whitespace-nowrap text-base font-medium text-info hover:text-primary px-4 py-2 border rounded-md hover:border-primary border-transparent transition-all"
                onClick={() => router.push('/login')}
              >
                Sign in
              </button>
              <button
                type="button"
                className="ml-4 whitespace-nowrap inline-flex items-center justify-center bg-primary bg-origin-border px-4 py-2  border border-transparent rounded-md shadow-sm text-base font-medium hover:text-primary hover:bg-base-100 transition-all hover:border-primary  text-white"
                onClick={() => router.push('/login')}
              >
                Sign up
              </button>
            </div>
          </div>
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0 bg-[url('../images/404bg.svg')] bg-cover min-h-full h-screen">
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-slate-700">
                    Study less, learn more.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-slate-600 text-center text-2xl sm:max-w-3xl">
                  One platform for your entire{' '}
                  <span className="line-through decoration-4 decoration-primary mr-2">
                    workflow
                  </span>
                  <span className="underline decoration-primary decoration-4">
                    studyflow
                  </span>
                  .
                </p>
                <div className="mt-10 bg-base-100 flex flex-col items-center rounded-md">
                  <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="relative grid gap-6 bg-base-100 px-5 py-6 sm:gap-8 rounded-lg sm:p-8 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="-m-3 p-3 flex items-center"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium">{item.name}</p>
                            <p className="mt-1 text-sm text-info">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-4 mb-4 whitespace-nowrap inline-flex items-center justify-center bg-primary bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium hover:text-primary hover:bg-base-100 transition-all hover:border-primary  text-white"
                    onClick={() => router.push('/login')}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-base-100 to-base-100"
          />
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r bg-primary">
                      <BeakerIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                      Create Flows from a variety of templates
                    </h2>
                    <p className="mt-4 text-lg text-info">
                      Notes, lectures, discussions, assignments, and
                      assessments, and add flashcards and tasks to your flow.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-primary bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                      <PencilAltIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                      Organize your studyflow with a science-based approach
                    </h2>
                    <p className="mt-4 text-lg text-info">
                      Connect Google Drive to Studyflow, and our servers will
                      automatically create flows, flashcards, and review tasks
                      once a note is backed up.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-primary bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 bg-red-100">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r bg-primary">
                      <BeakerIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                      Create Flows from a variety of templates
                    </h2>
                    <p className="mt-4 text-lg text-info">
                      Notes, lectures, discussions, assignments, and
                      assessments, and add flashcards and tasks to your flow.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-primary bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
                  <Image
                    alt="Customer profile user interface"
                    src={repetition}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:h-full lg:min-h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 pb-1 block bg-primary bg-clip-text text-transparent">
                Create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center bg-primary bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div> */}
      </main>

      <footer aria-labelledby="footer-heading" className="mt-16">
        <div className="bg-base-100 relative pb-2 pl-2">
          <p className="text-base text-info md:absolute md:left-8 md:bottom-4 md:mt-0 md:order-1">
            &copy; 2024 Studyflow. All rights reserved.
          </p>
          <div className="text-base text-info md:absolute md:right-8 flex md:bottom-4 md:mt-0 md:order-1">
            <p
              className="mr-4 cursor-pointer"
              onClick={() => router.push('/terms')}
            >
              Terms of Service
            </p>
            <p
              className="cursor-pointer"
              onClick={() => router.push('/privacy')}
            >
              {' '}
              Privacy policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
