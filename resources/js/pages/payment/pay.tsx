import Header from "@/netcomp/header";
import { Link, router } from "@inertiajs/react";
import qrlight from "@/netcomp/qrlight.png"
import { useState } from "react";

export default function plansign(props: any) {
  const {plan, email, payment} = props.userPlan;

  function updateStatus() {
    router.post(route('signup.statusUpdate'), { status: "done" }, {
      onSuccess: () => {
        router.visit(route("dashboard"));
      },
    });
  }

  const hargaMap: { [key: string]: number } = {
    premium: 190000,
    standard: 120000,
    basic: 65000,
    mobile: 54000,
  };

  const payMethMap: { [key: string]: string } = {
    creditcard: "Credit card",
    qris: "QRIS",
    eWallet: "E-Wallet",
    code: "Kode penukaran"
  };

  const harga = hargaMap[plan] || 0;
  const paymentMethod = payMethMap[payment] || "-";

  console.log('props', props)
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
        <div className="w-full max-w-2xl">
          <div className="flex flex-col rounded-lg bg-white border-2 border-zinc-400/40">
            <div className="border-b-2 border-zinc-200 p-3 flex flex-col items-center gap-2 mx-4">
            <h1 className="text-center font-sans text-black text-3xl w-full font-semibold">
                Selesaikan pembayaran anda
            </h1>
            </div>
            <div className="flex flex-row items-center gap-2 p-4 pt-0">
            <div className="flex flex-col items-center justify-start w-full px-2 my-4 md:px-4">
            <div className="flex justify-center items-center m-2">
                <img src={qrlight} alt="QR Code" className="w-xs h-auto" />
            </div>
                    <h2 className="text-xl font-semibold text-black mb-2">Rincian Produk</h2>
                    <div className="w-full divide-y">
                        <div className="flex justify-between p-3">
                          <span className="font-medium text-gray-700">Email</span>
                          <span className="text-gray-900">{email}</span>
                        </div>
                        <div className="flex justify-between p-3">
                          <span className="font-medium text-gray-700">Layanan</span>
                          <span className="text-gray-900 capitalize bg-sky-100">{plan}</span>
                        </div>
                        <div className="flex justify-between p-3">
                          <span className="font-medium text-gray-700">Durasi</span>
                          <span className="text-gray-900">30 Hari</span>
                        </div>
                        <div className="flex justify-between p-3">
                          <span className="font-medium text-gray-700">Harga</span>
                          <span className="text-gray-900 font-semibold">{harga}</span>
                        </div>
                        <div className="flex justify-between p-3">
                          <span className="font-medium text-gray-700">Metode Pembayaran</span>
                          <span className="text-gray-900">{paymentMethod}</span>
                        </div>
                    </div>
                    <div className='justify-center items-center flex mt-2'>
                        <button onClick={updateStatus} type="submit" className="bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium w-xs h-10 rounded transition-all ease-in-out duration-200 cursor-pointer">Konfirmasi</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
