import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industryDropdown, setIndustryDropdown] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setServicesDropdown(false);
    setIndustryDropdown(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    // Close mobile menu and dropdowns
    setMenuOpen(false);
    setServicesDropdown(false);
    setIndustryDropdown(false);
    
    // Add a small delay to allow menu to close before scrolling
    setTimeout(() => {
      const isHomePage = location.pathname === '/' || location.pathname === '/home';
      if (isHomePage) {
        const targetElement = document.getElementById(targetId);
        if (targetElement && navbarRef.current) {
          const navbarHeight = navbarRef.current.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        } else {
          // Fallback: scroll to top if target not found
          if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else {
        // Navigate to home page with hash
        navigate(`/#${targetId}`);
      }
    }, 100);
  };

  const handleDropdownClick = (e, dropdownType) => {
    e.preventDefault();
    if (dropdownType === 'services') {
      setServicesDropdown(!servicesDropdown);
      setIndustryDropdown(false);
    } else if (dropdownType === 'industry') {
      setIndustryDropdown(!industryDropdown);
      setServicesDropdown(false);
    }
  };

  const handleSubMenuClick = () => {
    // Close mobile menu and dropdowns
    setMenuOpen(false);
    setServicesDropdown(false);
    setIndustryDropdown(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      />
      
      <nav className="navbar" ref={navbarRef}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => {
            setMenuOpen(false);
            setServicesDropdown(false);
            setIndustryDropdown(false);
          }}>
            <img src="/creatives/NextPulse.png" alt="Logo" />
          </Link>
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                href="#services" 
                onClick={(e) => handleDropdownClick(e, 'services')}
                className={`dropdown-toggle ${servicesDropdown ? 'active' : ''}`}
              >
                Services
                <ChevronDown className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} size={16} />
              </a>
              <ul className={`dropdown-menu ${servicesDropdown ? 'active' : ''}`}>
                {/* <li>
                  <Link to="/enterprise-solution" onClick={handleSubMenuClick}>
                    <ArrowRight size={14} className="submenu-icon" />
                    Enterprise Solution
                  </Link>
                </li> */}
                <li>
                  <Link to="/products-services" onClick={handleSubMenuClick}>
                    <ArrowRight size={14} className="submenu-icon" />
                    Products & Services
                  </Link>
                </li>
                {/* <li><a href="#integrations" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Integrations
                </a></li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a 
                href="#transportation" 
                onClick={(e) => handleDropdownClick(e, 'industry')}
                className={`dropdown-toggle ${industryDropdown ? 'active' : ''}`}
              >
                Industries
                <ChevronDown className={`dropdown-icon ${industryDropdown ? 'rotated' : ''}`} size={16} />
              </a>
              {/* <ul className={`dropdown-menu ${industryDropdown ? 'active' : ''}`}>
                <li><a href="#manufacturing" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Manufacturing
                </a></li>
                <li><a href="#ecommerce" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Retail & E-Commerce
                </a></li>
                <li><a href="#healthcare" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Healthcare
                </a></li>
                <li><a href="#finance" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Finance
                </a></li>
                <li><a href="#construction" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Construction
                </a></li>
                <li><a href="#hospitality" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Hospitality
                </a></li>
                <li><a href="#education" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Education
                </a></li>
                <li><a href="#agriculture" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} className="submenu-icon" />
                  Agriculture
                </a></li>
              </ul> */}
            </li>
            <li className="nav-item">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside className={`mobile-sidebar ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={toggleMenu}>
            <img src="/creatives/NextPulse.png" alt="Logo" />
          </Link>
          <button className="sidebar-close" onClick={toggleMenu} aria-label="Close side menu">
            <X size={28} />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          </li>
          <li className={`sidebar-dropdown ${servicesDropdown ? 'open' : ''}`}>
            <button
              className="sidebar-dropdown-toggle"
              onClick={(e) => { e.preventDefault(); setServicesDropdown(!servicesDropdown); setIndustryDropdown(false); }}
              aria-expanded={servicesDropdown}
            >
              Services
              <ChevronDown className={`dropdown-icon ${servicesDropdown ? 'rotated' : ''}`} size={18} />
            </button>
            <ul className={`sidebar-submenu ${servicesDropdown ? 'show' : ''}`}>
              {/* <li>
                <Link to="/enterprise-solution" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} />Enterprise Solution
                </Link>
              </li> */}
              <li>
                <Link to="/products-services" onClick={handleSubMenuClick}>
                  <ArrowRight size={14} />Products & Services
                </Link>
              </li>
              {/* <li><a href="#integrations" onClick={handleSubMenuClick}><ArrowRight size={14} />Integrations</a></li> */}
            </ul>
          </li>
          <li className={`sidebar-dropdown ${industryDropdown ? 'open' : ''}`}>
            <button
              className="sidebar-dropdown-toggle"
              onClick={(e) => { e.preventDefault(); setIndustryDropdown(!industryDropdown); setServicesDropdown(false); }}
              aria-expanded={industryDropdown}
            >
              Industries
              <ChevronDown className={`dropdown-icon ${industryDropdown ? 'rotated' : ''}`} size={18} />
            </button>
            {/* <ul className={`sidebar-submenu ${industryDropdown ? 'show' : ''}`}>
              <li><a href="#manufacturing" onClick={handleSubMenuClick}><ArrowRight size={14} />Manufacturing</a></li>
              <li><a href="#ecommerce" onClick={handleSubMenuClick}><ArrowRight size={14} />Retail & E-Commerce</a></li>
              <li><a href="#healthcare" onClick={handleSubMenuClick}><ArrowRight size={14} />Healthcare</a></li>
              <li><a href="#finance" onClick={handleSubMenuClick}><ArrowRight size={14} />Finance</a></li>
              <li><a href="#construction" onClick={handleSubMenuClick}><ArrowRight size={14} />Construction</a></li>
              <li><a href="#hospitality" onClick={handleSubMenuClick}><ArrowRight size={14} />Hospitality</a></li>
              <li><a href="#education" onClick={handleSubMenuClick}><ArrowRight size={14} />Education</a></li>
              <li><a href="#agriculture" onClick={handleSubMenuClick}><ArrowRight size={14} />Agriculture</a></li>
            </ul> */}
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;