import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { Intro } from '../components'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next/GraphQL Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* INTRO PAGE DIV */}
      <div className="absolute w-full overflow-hidden">
        <div className="flex justify-center">
          <video autoPlay loop muted className="">
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {/* BLOG DIV */}
      <div className="relative flex justify-center bg-transparent">
        <div className="my-56 transform cursor-pointer rounded-full border-4 border-orange-100 bg-orange-700 p-12 text-white transition duration-500 hover:-translate-y-3 hover:bg-black hover:text-orange-500 md:my-80">
          <h1 className="text-4xl">Explore</h1>
          <h2 className="text-4xl">Drone Stories</h2>
        </div>
      </div>
      <div className="container mx-auto mb-8 p-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard post={post.node} key={index} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
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
