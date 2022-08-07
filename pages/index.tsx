import { Popover } from '@headlessui/react'
import {
  BeakerIcon,
  CheckCircleIcon,
  PencilAltIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import logo from 'images/logo.svg'
import Image from 'next/image'

const solutions = [
  {
    name: 'Notes & Flashcards',
    description: 'Create notes and flashcards with a wide range of templates.',
    href: '#',
    icon: PencilAltIcon,
  },
  {
    name: 'Task Manager',
    description: 'Make tasks and organize them by course and type.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Study Automation',
    description:
      "Automate a review schedule so you don't have to think about it.",
    href: '#',
    icon: BeakerIcon,
  },
  {
    name: 'Social Learning',
    description: 'Enroll in your school and courses and follow classmates.',
    href: '#',
    icon: UserGroupIcon,
  },
]

export default function index() {
  return (
    <div className="bg-base-100">
      <header>
        <Popover className="relative bg-base-100">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
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
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-info px-4 py-2 border rounded-md hover:border-primary border-transparent transition-all"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-4 whitespace-nowrap inline-flex items-center justify-center bg-primary bg-origin-border px-4 py-2  border border-transparent rounded-md shadow-sm text-base font-medium hover:text-primary hover:bg-base-100 transition-all hover:border-primary  text-white"
              >
                Sign up
              </a>
            </div>
          </div>
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-info/10" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0 bg-[url('../images/404bg.svg')] bg-cover min-h-full h-screen">
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-black">
                    Fall in love with learning again.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-2xl sm:max-w-3xl">
                  One platform for your entire{' '}
                  <span className="line-through decoration-4 mr-2">
                    workflow
                  </span>
                  <span className="underline decoration-primary decoration-4">
                    studyflow
                  </span>
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 rounded-md sm:p-8 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="-m-3 p-3 flex items-start"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Create Flows from a variety of templates
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
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
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Organize your workflow with a science-based approach
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Connect Google Drive, Notability, and Goodnotes to
                      automatically create flows and review tasks once a note is
                      backed up.
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
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                      <UserGroupIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Collaborate with fellow students
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Enroll in your university and courses and gain access to
                      the flows of your peers.
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
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 pb-1 block bg-primary bg-clip-text text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  bg-gray-100 hover:bg-gray-200"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center bg-primary bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2022 Studyflow. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
