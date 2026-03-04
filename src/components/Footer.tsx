const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RS Digital for ADDS and Services. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
