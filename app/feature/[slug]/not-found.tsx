/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-4xl font-bold">Feature Not Found</h1>
      <p className="text-muted-foreground">
        The feature you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Return Home
      </a>
    </div>
  );
}