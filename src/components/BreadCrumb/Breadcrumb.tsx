
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

type CrumbItem = { label: string; path?: string };

function humanize(slug: string) {
  return decodeURIComponent(slug)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function shouldShowBreadcrumb(pathname: string) {
  // Pages that DON'T show breadcrumb
  const hide = ["/", "/login", "/signup", "/wishlist", "/forgot-password"];
  if (hide.includes(pathname)) return false;
  return true;
}

type BreadcrumbLocationState = {
  categoryName?: string;
  productName?: string;
  categorySlug?: string;
};

export default function Breadcrumb() {
  const location = useLocation();
  const { pathname, state } = location as typeof location & { state?: BreadcrumbLocationState };

  if (!shouldShowBreadcrumb(pathname)) return null;

  // Build items according to your rules
  let items: CrumbItem[] = [{ label: "Home", path: "/" }];

  // Product Details: Account / categoryname / productname
  if (pathname.startsWith("/product/")) {
    const categoryName = (state && state.categoryName) || "Category";
    const productName = (state && state.productName) || humanize(pathname.split("/")[2] || "");
    items = [
      { label: "Account", path: "/account" }, // as per your rule
      { label: categoryName, path: `/category/${(state && state.categorySlug) || categoryName.toLowerCase()}` },
      { label: productName } // current, no path
    ];
  }
  // Checkout (Account / My Account / Product / View Cart / Checkout)
  else if (pathname === "/checkout") {
    items = [
      { label: "Account", path: "/account" },
      { label: "My Account", path: "/account" },
      { label: "Product", path: "/product" },
      { label: "View Cart", path: "/cart" },
      { label: "Checkout" }
    ];
  }
  // Cart: Home / Cart
  else if (pathname === "/cart") {
    items = [{ label: "Home", path: "/" }, { label: "Cart" }];
  }
  // Account: Home / My Account
  else if (pathname === "/account") {
    items = [{ label: "Home", path: "/" }, { label: "My Account" }];
  }
  // About: Home / About
  else if (pathname === "/about") {
    items = [{ label: "Home", path: "/" }, { label: "About" }];
  }
  // Contact: Home / Contact
  else if (pathname === "/contact") {
    items = [{ label: "Home", path: "/" }, { label: "Contact" }];
  }
  // 404: Home / 404 Page (if route is served as /404 or wildcard)
  else if (pathname === "/404" || pathname === "/not-found") {
    items = [{ label: "Home", path: "/" }, { label: "404 Page" }];
  }
  // Fallback: use path segments but keep first Home
  else {
    const segs = pathname.split("/").filter(Boolean);
    segs.forEach((seg, idx) => {
      const label = humanize(seg);
      const path = "/" + segs.slice(0, idx + 1).join("/");
      if (idx === segs.length - 1) items.push({ label });
      else items.push({ label, path });
    });
  }

  return (
    <div className="container">
      <nav className="breadcrumb">
      {items.map((it, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="breadcrumb-item">
            {!isLast && it.path ? (
              <Link to={it.path} className="breadcrumb-link">
                {it.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{it.label}</span>
            )}
            {!isLast && <span className="breadcrumb-sep">/</span>}
          </span>
        );
      })}
    </nav>
    </div>
  );
}
