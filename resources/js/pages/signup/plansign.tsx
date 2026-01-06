import Header from "@/netcomp/header";
import { Link } from "@inertiajs/react";
import tick from "@/netcomp/tick (1) 1.svg";
import Elipse from "@/netcomp/Ellipse 5.svg";
import checklist from "@/netcomp/check-list.svg";

export default function plansign(props: any) {
  const email = props.email || props.auth.email || props.auth.user?.email || '';
  console.log(props)
  return (
    <div className="min-h-screen bg-white bg-center relative overflow-hidden">
      <Header divider={true}>
        {!props.auth.user ? (
          <Link
            href={route("register")}
            as="button"
            className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg"
          >
            Sign in
          </Link>
        ) : (
          <Link
            href={route("logout")}
            method="post"
            as="button"
            className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg"
          >
            Sign out
          </Link>
        )}
      </Header>

      <div className="text-black flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-8 rounded-md p-8 bg-white">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img src={Elipse} alt="Elipse" className="absolute inset-0 w-full h-full" />
                <img src={tick} alt="Tick" className="w-10 h-10 z-10" />
              </div>
              <div className="font-normal font-poppins text-black">
                LANGKAH <b>3</b> DARI <b>5</b>
              </div>

              <div className="font-semibold font-poppins mb-4 text-black text-4xl">
                Pilih paketmu.
              </div>

              <div className="flex flex-col gap-2 text-left w-[90%]">
                {[
                  "Tidak berkomitmen, batalkan kapan saja.",
                  "Tidak ada iklan dan tidak ada biaya tambahan sama sekali.",
                  "Harga merakyat gak kaya pemerintah"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <img src={checklist} className="w-6 h-6 mt-1" alt="Checklist" />
                    <p className="font-medium font-sans text-black text-base">{text}</p>
                  </div>
                ))}
              </div>

              <form action={route("signup.planform")} method="get" className="w-full mt-6">
                <input type="email" name="email" value={email} required className="hidden" />
                <button
                  type="submit"
                  className="h-12 w-full btn btn-ghost font-poppins bg-sky-600 rounded-md shadow-none text-white border-none hover:bg-sky-700 focus:bg-sky-700 text-xl font-medium"
                >
                  Berikutnya
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
