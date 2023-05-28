import Head from 'next/head'
import Navbar from '../components/ui/Navbar'
import { useSelector } from 'react-redux'

interface ILayoutProps {
  seoTitle: string,
  seoDescription?: string,
  children: React.ReactNode
}

function Layout({ seoTitle, seoDescription, children }: ILayoutProps) {
  const theme = useSelector((state: any) => state.theme)

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <nav className='flex fixed top-0 right-0 justify-center items-center w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-200 shadow-md'>
       <Navbar />
      </nav>
      <main className='flex justify-center items-center w-full min-h-[100vh] bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-200'>
        {children}
      </main>
      <footer className='flex justify-center items-center w-[70%] mx-auto bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-200'>
        
      </footer>
    </div>
  )
}

export default Layout
