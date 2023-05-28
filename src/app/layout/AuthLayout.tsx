import Head from "next/head";
import { useSelector } from "react-redux";

interface Props {
  title: string,
  children: React.ReactNode
}

function AuthLayout({ title, children }: Props) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex justify-center items-center w-full min-h-[100vh] bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-200">
        <div className="w-[50%] flex flex-col">
          <label className="lg:text-4xl text-2xl text-center mb-6">
            {title}
          </label>
          {children}
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
