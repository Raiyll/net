import Header from "@/netcomp/header";
import { Link, useForm } from "@inertiajs/react";
import Device from "@/netcomp/Device.svg";


export default function plan(props: any) {

    console.log("props", props);
    const email = props.email || '';

    return (
    <div className="min-h-screen bg-white bg-center relative overflow-hidden">
        <Header divider={true}>
            {!props.auth.user ? (
                <Link href={route('register')} as="button" className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg">Sign in</Link>
            ) : (
                <Link href={route('logout')} method="post" as="button" className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg">Sign out</Link>
            )}
        </Header>

        <div className="text-black flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8 rounded-md p-8 bg-white">
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-center justify-center-safe items-center">
                            <img src={Device} alt="" className="mx-auto mb-4" />
                            <div className="font-normal font-poppins mb-4 text-black">LANGKAH <b>1</b> DARI <b>5</b></div>
                            <div className="w-auto font-semibold font-poppins mb-4 text-black text-3xl">Selesaikan pembelian akunmu</div>
                            <div className="max-w-100 mx-auto font-normal font-poppins mb-4 text-black text-xl">Netwatch dipersonalisasikan khusus untukmu. Buat sandi untuk menonton di perangkat apa pun, kapan pun.</div>
                            {props.auth.user ? (
                                <form action={route('signup.plansign')} method="get">
                                    <input type="email" name="email" value={props.auth.email = email} className="hidden" />
                                    <button type="submit" className="h-12 w-full mt-4 btn btn-ghost font-poppins bg-sky-600 rounded-md shadow-none text-white border-none hover:bg-sky-700 focus:bg-sky-700 text-xl font-medium">Berikutnya</button>
                                </form>
                            ):(
                                <form action={route('signup.regform')} method="get">
                                {/* Hilangin required soalnya bakal stuck kalau pakai tombol sign in yang di navbar soalnya perlu parameter email */}
                                <input type="email" name="email" value={email} className="hidden" />
                                <button type="submit" className="h-12 w-full mt-4 btn btn-ghost font-poppins bg-sky-600 rounded-md shadow-none text-white border-none hover:bg-sky-700 focus:bg-sky-700 text-xl font-medium">Berikutnya</button>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
