import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

interface Props {
  title: string,
  children: React.ReactNode
}

function AuthLayout({ title, children }: Props) {
  const theme = useSelector((state: any) => state.theme);
console.log(theme)
  return (
    <div className={theme.value === "dark" ? "dark" : ""}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="
      w-full flex items-center justify-center xxs:text-xl font-semibold lg:text-3xl shadow-sm text-xl
      flex fixed top-0 right-0 bg-slate-200 dark:bg-slate-900 p-4 text-slate-900 dark:text-slate-200
      ">
        <Link href="/">Bilim Saaty</Link>
      </nav>
      <main className="flex justify-center items-center w-full min-h-[100vh] bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-200">
        <div className="w-[85%] lg:w-[50%] flex flex-col">
          <label className="lg:text-4xl text-2xl text-center mb-2">
            {title}
          </label>
          <label className="text-center font-semibold text-sm lg:text-lg mb-6">При входе вы должны использовать ваши текущие данные Kundelik.kz</label>
          {children}
          <label className="text-center text-sm lg:text-lg mt-4 font-normal">
              <Link href={'/auth/sign-up'}>
                Нет аккаунта?{" "}
                <span className="text-blue-500 font-semibold hover:underline">Зарегистрироваться</span>
              </Link>
            </label>
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
