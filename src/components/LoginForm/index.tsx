'use client'
import ActionButton from '../ActionButton' // Adjust the import path as needed
import Input from '../Input' // Adjust the import path as needed
import Link from 'next/link'
import React from 'react'


export default function LoginForm() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Implement your login logic here
  }
  return (
    <>
      <div className="flex flex-1 min-h-screen bg-custom-light-gradient">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="mt-2 text-sm leading-6 text-black">
                Aún no te has registrado?{' '}
                <Link href="/register" className="font-semibold text-purple-700 hover:text-white">
                  Registrate {' '}
                </Link>
                Aquí
              </div>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleLogin} action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"

                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                      Usuario
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"

                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 pl-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-black">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <Link href="#" className="font-semibold text-purple-700 hover:text-white">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <ActionButton
                      type="submit"
                      classList="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Iniciar Session
                    </ActionButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/match.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
