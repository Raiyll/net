import Header from '@/netcomp/header';
import { Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Planform(props: any) {
  console.log('props', props);
    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const plans = [
        {
            title: 'Mobile',
            subtitle: '480p',
            price: 'IDR 54,000',
            quality: 'Seimbang',
            resolution: '480p',
            devices: 'Ponsel, Tablet',
            screens: '1',
            gradient: 'from-blue-900 to-blue-500',
            value: 'mobile',
        },
        {
            title: 'Basic',
            subtitle: '720p',
            price: 'IDR 65,000',
            quality: 'Baik',
            resolution: '720p',
            devices: 'TV, Komputer, Ponsel, Tablet',
            screens: '1',
            gradient: 'from-purple-800 to-purple-400',
            value: 'basic',
        },
        {
            title: 'Standard',
            subtitle: '1080p',
            price: 'IDR 120,000',
            quality: 'Bagus',
            resolution: '1080p',
            devices: 'TV, Komputer, Ponsel, Tablet',
            screens: '2',
            gradient: 'from-purple-800 to-purple-400',
            value: 'standard',
        },
    ];

    const premiumPlan = [
        {
            title: 'Premium',
            subtitle: '4K + HDR',
            price: 'IDR 190,000',
            quality: 'Luar Biasa',
            resolution: '4K (Ultra HD) + HDR',
            devices: 'TV, Komputer, Ponsel, Tablet',
            audio: 'Termasuk',
            screens: '6',
            gradient: 'from-blue-900 to-red-600',
            badge: 'Paling Mantap',
            value: 'premium',
        },
    ];

    function savePlan() {
        router.post(route('signup.saveplan'), {
          plan: selectedPlan,
          email: props.auth.user?.email,
        });
      }

    return (
        <div className="relative min-h-screen overflow-hidden bg-white bg-center">
            <Header divider={true}>
                {!props.auth.user ? (
                    <Link
                        href={route('register')}
                        as="button"
                        className="btn btn-ghost font-poppins rounded-field h-8 border-none text-lg text-black shadow-none hover:bg-transparent hover:underline"
                    >
                        Sign in
                    </Link>
                ) : (
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="btn btn-ghost font-poppins rounded-field h-8 border-none text-lg text-black shadow-none hover:bg-transparent hover:underline"
                    >
                        Sign out
                    </Link>
                )}
            </Header>
            <div className="flex min-h-svh flex-col items-center gap-6 p-6 text-black md:p-10">
                <div className="container flex flex-col w-[80%] gap-4">
                    <div className="w-full">
                        <div className="font-normal text-sm font-poppins text-black">LANGKAH <b>4</b> DARI <b>5</b></div>
                        <h2 className="text-3xl font-semibold text-left">Pilih paket yang cocok denganmu</h2>
                    </div>
                   
                    <div className="flex flex-wrap justify-center gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.value}
                                onClick={() => setSelectedPlan(plan.value)}
                                className={`mt-7 cursor-pointer border-1 border-t-0 rounded-xl overflow-hidden w-60 flex flex-col transition-all duration-200 ${selectedPlan === plan.value ? 'border-sky-500 shadow-xl border-2' : 'border-gray-300 shadow-sm'} `}
                            >
                                <div className={`bg-gradient-to-r px-4 py-3 font-bold text-white ${plan.gradient}`}>
                                    {plan.title}
                                    <br />
                                    <small className="font-normal">{plan.subtitle}</small>
                                </div>
                                <div className="bg-white px-4 py-4 text-sm space-y-4">
                                <div className="border-b border-gray-400 pb-2">
                                    <p>
                                        Harga Perbulan <br />
                                        <b>{plan.price}</b>
                                    </p>
                                    </div>
                                    
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Kualitas video dan audio <br />
                                        <span className="font-bold">{plan.quality}</span>
                                    </p>
                                    </div>
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Resolusi <br />
                                        <span className="font-bold">{plan.resolution}</span>
                                    </p>
                                    </div>
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Perangkat yang mendukung <br />
                                        <span className="font-bold">{plan.devices}</span>
                                    </p>
                                    </div>

                                    <p className="mt-3">
                                        Jumlah perangkat yang bisa menonton secara bersamaan <br />
                                        <span className="font-bold">{plan.screens}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                        {premiumPlan.map((plan) => (
                            <div
                                key={plan.value}
                                onClick={() => setSelectedPlan(plan.value)}
                                className={`relative cursor-pointer border-1 border-t-0 rounded-xl overflow-hidden w-60 flex flex-col transition-all duration-200 ${selectedPlan === plan.value ? 'border-sky-500 shadow-2xl border-2' : 'border-gray-300'}`}
                            >
                                <div className={`absolute top-0 left-0 h-7 w-full rounded-t-lg bg-sky-600 justify-center flex items-center`}>
                                    <div className='text-center font-semibold text-sm text-white'>{plan.badge}</div>
                                </div>
                                <div className={`bg-gradient-to-r px-4 py-3 mt-7 font-bold text-white ${plan.gradient}`}>
                                    {plan.title}
                                    <br />
                                    <small className="font-normal">{plan.subtitle}</small>
                                </div>
                                <div className="bg-white px-4 py-4 text-sm space-y-4">
                                    <div className="border-b border-gray-400 pb-2">
                                       <p>Harga Perbulan</p>
                                        <b>{plan.price}</b>
                                    </div>
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Kualitas video dan audio <br />
                                        <span className="font-bold">{plan.quality}</span>
                                    </p>
                                    </div>
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Resolusi <br />
                                        <span className="font-bold">{plan.resolution}</span>
                                    </p>
                                    </div>
                                    <div className="border-b border-gray-400 pb-2">
                                    <p className="mt-3">
                                        Perangkat yang mendukung <br />
                                        <span className="font-bold">{plan.devices}</span>
                                    </p>
                                    </div>
                                    {plan.audio && (
                                        <div className="border-b border-gray-400 pb-2">
                                        <p className="mt-3">
                                            Audio Spasial (Suara menggelegar) <br />
                                            <span className="font-bold">{plan.audio}</span>
                                        </p>
                                        </div>
                                    )}
                                    
                                    <p className="mt-3">
                                        Jumlah perangkat yang bisa menonton secara bersamaan <br />
                                        <span className="font-bold">{plan.screens}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
                        <div className="mt-10">
                            <p className="text-sm font-semibold text-zinc-500">Ketersediaan HD (720p), Full HD (1080p), Ultra HD (4K), dan HDR tergantung pada layanan internet dan kemampuan perangkat Anda. Tidak semua konten tersedia dalam semua resolusi. Lihat Ketentuan Penggunaan kami untuk detail selengkapnya.</p>
                            <p className="text-sm text-gray-600">Hanya orang yang tinggal bersama Anda yang dapat menggunakan akun Anda. Tonton di 4 perangkat berbeda secara bersamaan dengan Premium, 2 dengan Standar, dan 1 dengan Dasar dan Seluler.</p>
                            <p className="text-sm text-gray-600">Acara langsung disertakan dengan paket Netflix apa pun dan berisi iklan.</p>
                        </div>
                        <div className='justify-center items-center flex gap-4'>
                        <button onClick={savePlan} type="submit" className={"bg-sky-600 text-white text-xl font-semibold w-sm h-10 rounded transition-all ease-in-out duration-200" + (selectedPlan ? 'filter-none opacity-100 cursor-pointer' : 'filter grayscale opacity-50 cursor-not-allowed')} disabled={!selectedPlan}>Selanjutnya</button>
                        </div>
                </div>
            </div>
        </div>
    );
}