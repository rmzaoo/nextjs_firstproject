import Link from 'next/link'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
       
      <h1 className="title">Hello World</h1><br/>
      <Link href="/about">
        <a>Sobre Mim</a>
      </Link>
      {/*<Image
        alt="Next.js logo"
        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
        width={1200}
        height={400}
      />*/}
    </div>
  )
}
