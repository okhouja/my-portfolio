const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <h4>Copyrights ®{year} Omar's Website. All Rights Reserved</h4>
    </div>
  );
};

export default Footer;
