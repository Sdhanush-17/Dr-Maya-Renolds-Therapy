export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-2">
      <h1 className="text-xl font-semibold">Dr. Maya Reynolds</h1>

      <div className="flex gap-6 text-sm">
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}