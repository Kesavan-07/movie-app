const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="text-center py-4 bg-blue-300 fixed bottom-0 left-0 w-full">
      <p>&copy;{CurrentYear} @ blue-shirt-maaran. All rights reserved</p>
    </div>
  );
};

export default Footer;
