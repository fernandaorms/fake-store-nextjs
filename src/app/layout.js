import { GeistSans } from 'geist/font/sans';
import { Navbar } from '@/components/layout/navbar';
import './globals.css';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={GeistSans.variable}>
            <body className='bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white'>
                <Navbar />

                {children}
            </body>
        </html>
    );
}