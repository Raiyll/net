import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import bg from '@/ImgRes/bg.png';
import Header from '@/netcomp/header';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10" style={{ backgroundImage: `url(${bg})` }}>
            <Header></Header>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="w-full max-w-md bg-black/35 backdrop-blur-lg rounded-2xl shadow-lg p-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-start gap-4">
                        <div className="space-y-2 text-left">
                            <h1 className="text-3xl font-semibold">{title}</h1>
                            <p className="text-muted-foreground text-left text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
