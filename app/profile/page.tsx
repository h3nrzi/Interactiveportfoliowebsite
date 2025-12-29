import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ProfileBuilder } from '@/components/profile-builder';
import { Navbar } from '@/components/navbar';

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Profile Builder</h1>
            <p className="text-muted-foreground mt-2">
              Customize your professional profile
            </p>
          </div>
          <ProfileBuilder />
        </div>
      </main>
    </div>
  );
}
