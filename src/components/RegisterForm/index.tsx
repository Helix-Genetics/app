'use client'
import ActionButton from '../ActionButton' // Adjust the import path as needed
import Input from '../Input' // Adjust the import path as needed
import Link from 'next/link'
import React from 'react'


export default function RegisterForm() {
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Data:', event)
  }
  return (
    <>
      <div className="flex flex-1 min-h-screen bg-custom-dark-gradient">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <p className="mt-2 text-sm leading-6 text-white">
                Comience gratis
              </p>
              <p className="mt-2 text-sm leading-6 text-white">
                Ya registrado?{' '}
                <Link href="/login" className="font-semibold text-purple-700 hover:text-white">
                  Inicie Session {' '}
                </Link>
                en su cuenta
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleRegister} action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-white">
                      Nombres
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"

                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">
                      Apellidos
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Correo Electrónico
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
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                      Número de teléfono
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type='tel'
                        autoComplete="phone"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-2"

                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
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
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                      Contraseña
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
                  <div>
                    <label htmlFor="howHeard" className="block text-sm font-medium leading-6 text-white">
                      Cómo se enteró de nosotros?
                    </label>
                    <div className="mt-2">
                      <select
                        id="howHeard"
                        name="howHeard"
                        required
                        className="block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 pl-2"
                      >
                        <option value="social_media">Redes Sociales</option>
                        <option value="marketing_campaigns">Campañas de marketing</option>
                        <option value="referred">Referidos</option>
                        <option value='browsing'>Busqueda En Linea</option>
                        <option value="other">Otra</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <ActionButton
                      type="submit"
                      classList="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Registrate
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