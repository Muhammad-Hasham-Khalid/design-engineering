import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="grid h-screen w-full place-items-center bg-zinc-800">
      <h1 className="text-2xl font-bold text-white">Coming Soon ...</h1>
    </main>
  );
}
