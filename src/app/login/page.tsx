'use client';

import { useAuth } from '@/lib/auth-context';
import { AuthForm } from '@/components/AuthForm';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center">
      <AuthForm />
    </main>
  );
}
