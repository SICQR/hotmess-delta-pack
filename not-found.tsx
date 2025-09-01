export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="h1">Lost in the darkroom?</h1>
      <p className="mt-3 muted">That page doesn’t exist. Try the Shop or tune the Radio.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a className="btn" href="/shop">Shop</a>
        <a className="btn-ghost" href="/radio">Radio</a>
      </div>
    </div>
  );
}
