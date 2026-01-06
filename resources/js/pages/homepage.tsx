import { Head, router, useForm } from "@inertiajs/react";
import bg from '../ImgRes/bg.png';
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Header from "@/netcomp/header";
import { Languages, ChevronDown } from "lucide-react";

export default function HomePage(props: any) {
    const [email, setEmail] = useState('');

    console.log("props", props);
    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <Header>
                <div className="flex grow justify-end px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown dropdown-start bg-transparent mr-3">
                            <div  tabIndex={0} role="button" className="h-8 outline-1 bg-zinc-950/30 outline-white/50 rounded-xs flex items-center gap-1 px-2 cursor-pointer">
                                <Languages className="w-4 h-4 text-white" />
                                <div className="btn btn-ghost font-medium hover:bg-transparent focus:bg-transparent rounded-field border-none shadow-none">Bahasa Indonesia</div>
                                <ChevronDown className="w-4 h-4 text-white" />
                            </div>
                            <ul
                            tabIndex={0}
                            className="menu dropdown-content font-light bg-gray-800 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                            <li><a>Bahasa Indonesia</a></li>
                            <li><a>Belom ada bahasa laen, udah Indonesia aja</a></li>
                            </ul>
                        </div>
                        {!props.auth.user && (
                            <a href={route('login')} className="h-8 btn btn-ghost font-poppins bg-sky-600 rounded-field shadow-none border-none hover:bg-sky-700 focus:bg-sky-700">Masuk</a>
                        )}
                        {props.auth.user && (
                            <button onClick={() => router.post(route('logout'))} className="h-8 btn btn-ghost font-poppins bg-red-600 rounded-field shadow-none border-none hover:bg-red-700 focus:bg-red-700">Logout</button>
                        )}
                    </div>
                </div>
            </Header>
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
                <div className="text-center p-4 px-40">
                    <h1 className="text-6xl font-bold font-poppins mb-8">Tonton jutaan film, series TV, dan lainnya</h1>
                    <p className="text-3xl font-bold font-noto mb-7">Mulai dari RP 50.000. Batalkan kapan saja.</p>
                    <p className="text-xl font-poppins mb-2">Siap untuk menonton? Masukkan email kamu untuk membuat atau mengaktifkan langgananmu.</p>
                </div>
                <form action={route('plan')} method="get" className="flex-row flex justify-center items-center gap-2">
                    <Input type="email" name="email" required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Masukkan email anda..." className="input w-md bg-zinc-950/50 outline-1" />
                    <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-1.5 px-6 rounded-sm">Mulai</button>
                </form>
            </div>
        </div>
    );
}

