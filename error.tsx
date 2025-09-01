"use client";
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-20 text-center">
      <h1 className="h1">We dropped the beat.</h1>
      <p className="mt-3 muted">An error occurred: {error.message}</p>
      <button className="btn mt-6" onClick={() => reset()}>Retry</button>
    </div>
  );
}
