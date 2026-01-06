import Header from "@/netcomp/header";
import { Link, useForm } from "@inertiajs/react";
import lock from "@/netcomp/Lock/Group 48.svg";
import Elipse from "@/netcomp/Lock/Ellipse 5.svg";
import { useState, useRef, useEffect } from "react";
import cc from "@/netcomp/CC.svg";
import cp from "@/netcomp/codepayment.svg";
import ewallet from "@/netcomp/ewallet.svg";
import qris from "@/netcomp/LogoQRIS.svg";

export default function paymentform(props: any) {
  const email = props.email || "";
  const [paymentMethod, setPaymentMethod] = useState("");
  const paymentContainerRef = useRef(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      paymentContainerRef.current &&
      !(paymentContainerRef.current as HTMLElement).contains(e.target as Node)
    ) {
      setPaymentMethod("");
    }
  };

  const { post, setData, processing, errors } = useForm({
    payment: "",
  });

  useEffect(() => {
    setData("payment", paymentMethod);
  }, [paymentMethod]);
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("signup.payUpdate"));
  };

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

      <div
        className="text-black flex min-h-svh flex-col items-center gap-6 p-6 md:p-10"
        onClick={handleClickOutside}
      >
        <div className="w-full max-w-sm" ref={paymentContainerRef}>
          <div className="flex rounded-md bg-white">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img src={Elipse} alt="Elipse" className="absolute inset-0 w-full h-full" />
                <img src={lock} alt="Tick" className="w-10 h-10 z-10" />
              </div>
              <div className="font-normal font-poppins text-black">
                LANGKAH <b>5</b> DARI <b>5</b>
              </div>

              <div className="font-semibold font-poppins mb-2 text-black text-4xl">
                Pilih metode pembayaran
              </div>
              <p className="mb-2">Pembayaran aman dan bisa ganti metode pembayaran kapan aja.</p>

              <div className="flex flex-col gap-2 text-left w-[95%]">
                <div
                  className={`border rounded-sm p-4 flex items-center gap-2 cursor-pointer ${
                    paymentMethod === "creditCard"
                      ? "border-sky-500 shadow-lg border-2"
                      : "border-zinc-500 shadow-sm"
                  }`}
                  onClick={() => setPaymentMethod("creditCard")}
                >
                  <label htmlFor="creditCard" className="text-black">Kartu Kredit</label>
                  <img src={cc} className="h-6" />
                </div>
                <div
                  className={`border rounded-sm p-4 flex items-center gap-2 cursor-pointer ${
                    paymentMethod === "qris"
                      ? "border-sky-500 shadow-lg border-2"
                      : "border-zinc-500 shadow-sm"
                  }`}
                  onClick={() => setPaymentMethod("qris")}
                >
                  <label htmlFor="qris" className="text-black">QRIS</label>
                  <img src={qris} alt="QRIS" className="h-6" />
                </div>
                <div
                  className={`border rounded-sm p-4 flex items-center gap-2 cursor-pointer ${
                    paymentMethod === "eWallet"
                      ? "border-sky-500 shadow-lg border-2"
                      : "border-zinc-500 shadow-sm"
                  }`}
                  onClick={() => setPaymentMethod("eWallet")}
                >
                  <label htmlFor="eWallet" className="text-black">E-Wallet</label>
                  <img src={ewallet} alt="E-Wallet" className="h-6" />
                </div>
                <div
                  className={`border rounded-sm p-4 flex items-center gap-2 cursor-pointer ${
                    paymentMethod === "code"
                      ? "border-sky-500 shadow-lg border-2"
                      : "border-zinc-500 shadow-sm"
                  }`}
                  onClick={() => setPaymentMethod("code")}
                >
                  <label htmlFor="code" className="text-black">Kode Penukaran</label>
                  <img src={cp} alt="Kode Penukaran" className="h-6" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="w-full mt-6">
                <input name="payment" value={paymentMethod} required className="hidden" />
                <button
                  type="submit"
                  disabled={paymentMethod === ""}
                  className={`h-12 w-full transition-all duration-300 btn-ghost font-poppins rounded-md shadow-none text-xl font-medium ${
                    paymentMethod === ""
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-sky-600 cursor-pointer hover:bg-sky-700 focus:bg-sky-700 text-white"
                  }`}
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
