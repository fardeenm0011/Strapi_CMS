'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import facebookIcon from 'public/assets/img/icon/facebook_icon.svg'
import Image from 'next/image';

export default function FacebookSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 mt-2'
      onClick={() => signIn('facebook', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex' , justifyContent:'center'}}>
        <Image src={facebookIcon} alt='facebook icon' style={{ width: '25px', height: '25px' }} />
      </div>
    </button>
  );
}