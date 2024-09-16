'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import googleIcon from 'public/assets/img/icon/google_icon.svg'
import Image from 'next/image';

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 flex mt-2'
      onClick={() => signIn('google', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={googleIcon} alt='google icon' />
      </div>
    </button>
  );
}