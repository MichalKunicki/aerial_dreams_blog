import React, { useRef } from 'react'
import Head from 'next/head'
import { PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'
import poster from '../public/poster.jpg'

export default function Home({ posts }) {
  const carousel = useRef(null)
  const executeScroll = () => carousel.current.scrollIntoView(true)

  return (
    <div>
      <Head>
        <title>Aerial Dreams</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* INTRO PAGE DIV */}
      <div className="absolute w-full overflow-hidden">
        <div className="flex justify-center">
          <video autoPlay loop muted playsInline poster={poster}>
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <div className="left-50 absolute bottom-6 xl:bottom-10 2xl:bottom-48">
            <div className="h-screen w-14 animate-bounce rounded-full bg-orange-500 p-2 pb-3 opacity-50">
              <img
                id="arrow"
                className="absolute bottom-0 h-24 w-10"
                src="/arrow.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center bg-transparent">
        <div
          onClick={executeScroll}
          className="my-64 transform animate-custom cursor-pointer rounded-full border-4 border-orange-100 bg-orange-700 p-12 text-white transition duration-500 hover:-translate-y-3 hover:bg-black hover:text-orange-500 md:my-80"
        >
          <h1 className="text-4xl">Explore</h1>
          <h2 className="text-4xl">Aerial Dreams</h2>
        </div>
      </div>
      {/* BLOG DIV */}
      <div ref={carousel} className="scroll-mt-32">
        <FeaturedPosts />
      </div>
      <div className="container mx-auto mb-8 p-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:top-28">
              <PostWidget />
              {/* <Categories /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
