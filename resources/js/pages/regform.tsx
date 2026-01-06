import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import Header from "@/netcomp/header";
import { EyeClosed, Eye } from 'lucide-react';

type RegisterForm = {
  email: string;
  password: string;
};

export default function RegForm(props: any) {
  console.log("props", props);
  const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
    email: props.email || '',
    password: '',
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(prev => !prev);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password'),
      onSuccess: () => {
        route('signup.plansign', {
          email: props.email
        });
      }
    });
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
        <div className="w-full max-w-md">
          <div className="p-6 rounded-md bg-white shadow border border-gray-200">
            <div className="text-left mb-6">
              <div className="text-xs mb-1">LANGKAH <b>2</b> DARI <b>5</b></div>
              <div className="text-2xl font-semibold">Create a password to start your membership</div>
              <p className="mt-2 text-sm">Hanya beberapa langkah lagi dan selesai! Kami juga membenci dokumen.</p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <div className="relative">
                    <input
                        id="email"
                        type="email"
                        ref={emailRef}
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        disabled={processing}
                        placeholder=" "
                        className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-base focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500"
                    >
                        Email
                    </label>
                    <InputError message={errors.email} />
                </div>

                <div className="relative">
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        ref={passRef}
                        required
                        autoComplete="new-password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        disabled={processing}
                        placeholder=" "
                        className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-base focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-3 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-500"
                    >
                        Password
                    </label>
                    <button 
                        type="button" 
                        onClick={togglePassword} 
                        className="absolute right-4 top-4 text-xs text-gray-500"
                    >
                        {showPassword ? <EyeClosed /> : <Eye />}
                    </button>
                    <InputError message={errors.password} />
                </div>

              <Button type="submit" className="w-full h-10 cursor-pointer font-semibold rounded-md hover:bg-sky-700 focus:bg-sky-700 bg-sky-600 text-white" disabled={processing}>
                {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                Berikutnya
              </Button>

              <div className="text-center text-sm mt-4">
                Already have an account?{' '}
                <TextLink href={route('login')} className='text-black font-semibold'>
                  Log in
                </TextLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
