'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import githubIcon from 'public/assets/img/icon/github_icon.svg'
import Image from 'next/image';

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return (
    <button
      className='bg-white border border-zinc-300 py-1 rounded-md w-full text-zinc-700 flex items-center justify-center mt-2'
      onClick={() => signIn('github', { callbackUrl: callbackUrl })}
    >
      <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={githubIcon} alt='github icon' style={{ width: '25px', height: '25px' }} />
      </div>
    </button>
  );
}