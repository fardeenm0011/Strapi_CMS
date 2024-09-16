'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import twitterIcon from 'public/assets/img/icon/twitter_icon.svg'
import Image from 'next/image';

export default function TwitterSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 flex items-center justify-center mt-2'
      onClick={() => signIn('twitter', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={twitterIcon} alt='twitter icon' style={{ width: '25px', height: '25px' }} />
      </div>
    </button>
  );
}