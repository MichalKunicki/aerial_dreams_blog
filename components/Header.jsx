import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto bg-black px-10">
      <div className="inline-block w-full py-8">
        <div className="block md:float-left">
          <Link href="/">
            <h2 className="transform cursor-pointer cursor-pointer text-4xl font-bold text-white text-white transition duration-500 hover:-translate-y-1 hover:text-orange-500">
              Drone Stories
            </h2>
          </Link>
        </div>
        <div className="hidden lg:float-left lg:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <h1 className="mt-2 ml-10 transform cursor-pointer cursor-pointer align-middle font-semibold text-white transition duration-500 hover:-translate-y-1 hover:text-orange-500 md:float-right">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
