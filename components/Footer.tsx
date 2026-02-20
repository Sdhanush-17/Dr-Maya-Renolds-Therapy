export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500">
      <div className="border-t pt-6">
        <p>© {new Date().getFullYear()} Dr. Maya Reynolds Therapy</p>
        <p className="mt-2">Minneapolis, Minnesota</p>
      </div>
    </footer>
  );
}