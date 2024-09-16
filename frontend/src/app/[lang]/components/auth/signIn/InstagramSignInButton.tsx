'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import instagramIcon from 'public/assets/img/icon/instagram_icon.svg'
import Image from 'next/image';

export default function InstagramSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 flex items-center justify-center mt-2'
      onClick={() => signIn('instagram', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={instagramIcon} alt='instagram icon' style={{ width: '25px', height: '25px' }} />
      </div>
    </button>
  );
}