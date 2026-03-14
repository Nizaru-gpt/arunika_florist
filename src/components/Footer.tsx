export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex items-center justify-between">
        <div>&copy; {new Date().getFullYear()} <span className="font-medium">Arunika Florist</span>. All rights reserved.</div>
        <div className="flex gap-4">
          <a className="hover:text-coral" href="#">Privacy</a>
          <a className="hover:text-coral" href="#">Terms</a>
          <a className="hover:text-coral" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
