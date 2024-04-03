const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 border-t text-white bg-red-500">
      <div className="container mx-auto text-center font-bold">
        <p>&copy; {currentYear} Dīəgnōsəs All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
