const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-admin mt-auto footer-light">
      <div className="container-xl px-4">
        <div className="row">
          <div className="col-md-6 small">
            Copyright &copy; Sebastián Morales {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
