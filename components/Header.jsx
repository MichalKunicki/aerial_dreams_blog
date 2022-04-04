import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Hamburger from 'hamburger-react'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [isToggled, setIsToggled] = useState(false)
  const hide = () => setIsToggled(false)

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="fixed left-0 top-0 z-10 mx-auto w-screen bg-black px-6">
      <div className="flex justify-between px-5 py-8 lg:justify-around lg:px-0">
        <div className="block md:float-left lg:mr-24">
          <Link href="/">
            <h2 className="transform cursor-pointer cursor-pointer text-4xl font-bold text-white text-white transition duration-300 hover:-translate-y-1 hover:text-orange-500">
              Aerial Dreams
            </h2>
          </Link>
        </div>
        <div className="hidden lg:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <h1 className="mt-2 transform cursor-pointer align-middle font-semibold text-white opacity-90 transition duration-200 hover:-translate-y-1 hover:text-orange-500">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
        <div className="relative rounded-full px-1 text-white transition duration-300 ease-in-out hover:bg-orange-600 lg:hidden">
          <Hamburger
            duration={0.6}
            toggled={isToggled}
            toggle={setIsToggled}
            size={30}
          />
        </div>
      </div>
      {isToggled && (
        <div className="mx-8 mb-1 lg:hidden">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <h1
                onClick={hide}
                className="transform cursor-pointer border-t-2 border-gray-800 py-4 text-right font-semibold text-white transition duration-200 hover:-translate-y-1 hover:text-orange-500"
              >
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
