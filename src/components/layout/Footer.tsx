const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="flex min-h-12 flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-gray-500 sm:flex-row lg:px-6">
        <span>© {new Date().getFullYear()} SPNI BONE</span>

        <span>Engineering Shift Schedule</span>
      </div>
    </footer>
  );
};

export default Footer;
