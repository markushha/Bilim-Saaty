import Head from 'next/head'

interface ILayoutProps {
  seoTitle: string,
  seoDescription?: string,
  children: React.ReactNode
}

function Layout({ seoTitle, seoDescription, children }: ILayoutProps) {

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <nav className='flex justify-center items-center w-[70%] mx-auto'>
       
      </nav>
      <main className='flex justify-center items-center w-[70%] mx-auto'>
        {children}
      </main>
      <footer className='flex justify-center items-center w-[70%] mx-auto'>
        
      </footer>
    </>
  )
}

export default Layout
