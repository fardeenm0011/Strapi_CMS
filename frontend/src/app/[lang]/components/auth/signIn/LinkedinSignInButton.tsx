'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import linkedinIcon from 'public/assets/img/icon/linkedin_icon.svg'
import Image from 'next/image';

export default function LinkedinSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 flex items-center justify-center mt-2'
      onClick={() => signIn('linkedin', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={linkedinIcon} alt='linkedin icon' style={{ width: '25px', height: '25px' }} />
      </div>
    </button>
  );
}