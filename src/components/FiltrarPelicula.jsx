import { useState } from 'react'
import { Icon } from '@iconify/react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'



export const FiltrarPelicula = ({ genre, date, valor, actualizador }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isOpenGender, setIsOpenGender] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const handleMouseEnterGender = () => {
    setIsOpenGender(true);
  };

  const handleMouseLeaveGender = () => {
    setIsOpenGender(false);
  };

  const selectGender = (codigo, nombre, valor) => {
    genre(codigo, nombre)
    setIsOpenGender(valor)
    setMobileMenuOpen(false)
  }

  const handleMouseEnterDate = () => {
    setIsOpenDate(true);
  };

  const handleMouseLeaveDate = () => {
    setIsOpenDate(false);
  };

  const seleccionarFecha = (primera, segunda, valor) => {
    date(primera, segunda)
    setIsOpenDate(valor)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between lg:justify-start p-6 lg:px-8">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://miro.medium.com/v2/resize:fit:1024/1*idLhmtcMdWeN-UMGR0ROjQ.png"
              className="w-40"
            />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-xl">
          <div
            onMouseEnter={handleMouseEnterGender}
            onMouseLeave={handleMouseLeaveGender}
            className="relative inline-block"
          >
            <button className="px-4 py-2 text-black rounded flex items-center">
              Genero
              {
                isOpenGender ? <Icon className='rotate-180' icon="eva:arrow-ios-downward-fill" /> : <Icon icon="eva:arrow-ios-downward-fill" />
              }
            </button>
            {isOpenGender && (
              <div
                className="absolute left-0 top-7 mt-2 min-w-max h-60 bg-white rounded shadow-lg z-10 overflow-y-scroll">
                <button onClick={() => selectGender('28', 'Accion', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Accion
                </button>
                <button onClick={() => selectGender('12', 'Aventura', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Aventura
                </button>
                <button onClick={() => selectGender('16', 'Animacion', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Animacion
                </button>
                <button onClick={() => selectGender('35', 'Comedia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Comedia
                </button>
                <button onClick={() => selectGender('80', 'Crimen', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Crimen
                </button>
                <button onClick={() => selectGender('99', 'Documental', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Documental
                </button>
                <button onClick={() => selectGender('18', 'Drama', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Drama
                </button>
                <button onClick={() => selectGender('10751', 'Familia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Familia
                </button>
                <button onClick={() => selectGender('14', 'Fantasia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Fantasia
                </button>
                <button onClick={() => selectGender('36', 'Historia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Historia
                </button>
                <button onClick={() => selectGender('27', 'Terror', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Terror
                </button>
                <button onClick={() => selectGender('10402', 'Musica', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Musica
                </button>
                <button onClick={() => selectGender('9648', 'Misterio', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Misterio
                </button>
                <button onClick={() => selectGender('10749', 'Romance', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Romance
                </button>
                <button onClick={() => selectGender('878', 'Ciencia Ficción', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Ciencia Ficción
                </button>
                <button onClick={() => selectGender('10770', 'Pelicula de Tv', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Pelicula de Tv
                </button>
                <button onClick={() => selectGender('53', 'Suspenso', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Suspenso
                </button>
                <button onClick={() => selectGender('10752', 'Belica', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Belica
                </button>
                <button onClick={() => selectGender('37', 'Occidentales', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Occidentales
                </button>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleMouseEnterDate}
            onMouseLeave={handleMouseLeaveDate}
            className="relative inline-block"
          >
            <button className="px-4 py-2 text-black rounded flex items-center">
              fecha
              {
                isOpenDate ? <Icon className='rotate-180' icon="eva:arrow-ios-downward-fill" /> : <Icon icon="eva:arrow-ios-downward-fill" />
              }
            </button>
            {isOpenDate && (
              <div
                className="absolute left-0 top-6 mt-2 min-w-max bg-white rounded shadow-lg z-10">
                <button onClick={() => seleccionarFecha('2024-01-01', '2024-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  2024
                </button>
                <button onClick={() => seleccionarFecha('2023-01-01', '2023-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  2023
                </button>
                <button onClick={() => seleccionarFecha('2022-01-01', '2022-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  2022
                </button>
                <button onClick={() => seleccionarFecha('2021-01-01', '2021-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  2021
                </button>
                <button onClick={() => seleccionarFecha('2020-01-01', '2020-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  2020
                </button>
              </div>
            )}
          </div>
        </PopoverGroup>
        <div className='lg:ms-[30rem]'>
          <input
            className='border-2 border-black'
            type="text"
            placeholder="Buscar películas..."
            value={valor}
            onChange={(e) => actualizador(e.target.value)}
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Icon icon="line-md:menu" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <Icon icon="line-md:menu-to-close-alt-transition" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 flex flex-col">
                <div
                  onMouseEnter={handleMouseEnterGender}
                  onMouseLeave={handleMouseLeaveGender}
                  className="relative inline-block w-10"
                >
                  <button className="px-4 py-2 text-black rounded flex items-center">
                    Genero
                    {
                      isOpenGender ? <Icon className='rotate-180' icon="eva:arrow-ios-downward-fill" /> : <Icon icon="eva:arrow-ios-downward-fill" />
                    }
                  </button>
                  {isOpenGender && (
                    <div
                      className="absolute left-0 top-7 mt-2 min-w-max h-60 bg-white rounded shadow-lg z-10 overflow-y-scroll">
                      <button onClick={() => selectGender('28', 'Accion', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Accion
                      </button>
                      <button onClick={() => selectGender('12', 'Aventura', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Aventura
                      </button>
                      <button onClick={() => selectGender('16', 'Animacion', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Animacion
                      </button>
                      <button onClick={() => selectGender('35', 'Comedia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Comedia
                      </button>
                      <button onClick={() => selectGender('80', 'Crimen', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Crimen
                      </button>
                      <button onClick={() => selectGender('99', 'Documental', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Documental
                      </button>
                      <button onClick={() => selectGender('18', 'Drama', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Drama
                      </button>
                      <button onClick={() => selectGender('10751', 'Familia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Familia
                      </button>
                      <button onClick={() => selectGender('14', 'Fantasia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Fantasia
                      </button>
                      <button onClick={() => selectGender('36', 'Historia', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Historia
                      </button>
                      <button onClick={() => selectGender('27', 'Terror', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Terror
                      </button>
                      <button onClick={() => selectGender('10402', 'Musica', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Musica
                      </button>
                      <button onClick={() => selectGender('9648', 'Misterio', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Misterio
                      </button>
                      <button onClick={() => selectGender('10749', 'Romance', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Romance
                      </button>
                      <button onClick={() => selectGender('878', 'Ciencia Ficción', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Ciencia Ficción
                      </button>
                      <button onClick={() => selectGender('10770', 'Pelicula de Tv', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Pelicula de Tv
                      </button>
                      <button onClick={() => selectGender('53', 'Suspenso', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Suspenso
                      </button>
                      <button onClick={() => selectGender('10752', 'Belica', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Belica
                      </button>
                      <button onClick={() => selectGender('37', 'Occidentales', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        Occidentales
                      </button>
                    </div>
                  )}
                </div>
                <div
                  onMouseEnter={handleMouseEnterDate}
                  onMouseLeave={handleMouseLeaveDate}
                  className="relative inline-block w-10"
                >
                  <button className="px-4 py-2 text-black rounded flex items-center">
                    fecha
                    {
                      isOpenDate ? <Icon className='rotate-180' icon="eva:arrow-ios-downward-fill" /> : <Icon icon="eva:arrow-ios-downward-fill" />
                    }
                  </button>
                  {isOpenDate && (
                    <div
                      className="absolute left-0 top-6 mt-2 min-w-max bg-white rounded shadow-lg z-10">
                      <button onClick={() => seleccionarFecha('2024-01-01', '2024-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        2024
                      </button>
                      <button onClick={() => seleccionarFecha('2023-01-01', '2023-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        2023
                      </button>
                      <button onClick={() => seleccionarFecha('2022-01-01', '2022-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        2022
                      </button>
                      <button onClick={() => seleccionarFecha('2021-01-01', '2021-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        2021
                      </button>
                      <button onClick={() => seleccionarFecha('2020-01-01', '2020-12-31', false)} className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                        2020
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
