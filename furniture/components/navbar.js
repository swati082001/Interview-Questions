const NavbarForHomepage = () => {
    return `<nav id="navbar">
    <div class="logo">
      <a href="index.html">
        <img
          src="https://png.pngtree.com/template/20190928/ourmid/pngtree-gold-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312127.jpg"
          alt="logo"
          height="50px"
        />
      </a>
    </div>
  
    <div class="routes">
      <a href="./pages/ad.html"><div id="ads">Ad</div></a>
      <a href="./pages/products.html"><div id="cars">Products</div></a>
      <a href="./pages/wishlist.html"><div id="wishlist">Wishlist</div></a>
    </div>
  </nav>`;
  };
  const NavbarForOtherpages = () => {
    return `<nav id="navbar">
    <div class="logo">
      <a href="../index.html">
        <img
          src="https://png.pngtree.com/template/20190928/ourmid/pngtree-gold-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312127.jpg"
          alt="logo"
          height="50px"
        />
      </a>
    </div>
  
    <div class="routes">
      <a href="./ad.html"><div id="ads">Ad</div></a>
      <a href="./products.html"><div id="cars">Products</div></a>
      <a href="./wishlist.html"><div id="wishlist">Wishlist</div></a>
    </div>
  </nav>`;
  };
  
  export { NavbarForHomepage, NavbarForOtherpages };