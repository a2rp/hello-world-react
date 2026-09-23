import { createElement, useEffect, useState } from "react";
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FiArrowUp, FiArrowUpRight, FiCoffee, FiHeart, FiMail, FiMenu, FiMessageCircle, FiUser, FiX } from "react-icons/fi";
import styled from "styled-components";

const footerLinks = [
    ["Portfolio", "https://www.ashishranjan.net", FiUser],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FiMessageCircle],
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 120);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Page>
            <Header>
                <HeaderInner>
                    <Brand href="#home" onClick={() => setMenuOpen(false)}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span><small>REACT STARTER</small><strong>Hello World</strong></span>
                    </Brand>
                    <Navigation $open={menuOpen}>
                        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>React docs <FiArrowUpRight aria-hidden="true" /></a>
                        <a href="https://github.com/a2rp/hello-world-react" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><FaGithub aria-hidden="true" /> Source</a>
                    </Navigation>
                    <MenuButton type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </MenuButton>
                </HeaderInner>
            </Header>

            <main id="home">
                <Hero>
                    <Icon><FiHeart aria-hidden="true" /></Icon>
                    <Eyebrow>React starter</Eyebrow>
                    <h1>Hello World</h1>
                    <p>A clean, friendly starting point for building your next interface with React and Vite.</p>
                    <Actions>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Explore React <FiArrowUpRight aria-hidden="true" /></a>
                        <a className="secondary" href="https://github.com/a2rp/hello-world-react" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> View source</a>
                    </Actions>
                </Hero>
            </main>

            <Footer>
                <FooterTop>
                    <Brand><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" /> <strong>Hello World starter</strong></Brand>
                    <SocialLinks aria-label="Developer and support links">
                        {footerLinks.map(([label, href, IconComponent]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(IconComponent, { "aria-hidden": true })}</a>)}
                    </SocialLinks>
                </FooterTop>
                <Copyright>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></Copyright>
            </Footer>

            <TopButton type="button" data-visible={showTop} aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><FiArrowUp aria-hidden="true" /></TopButton>
        </Page>
    );
}

export default App;

const Page = styled.div`min-height:100dvh; background:radial-gradient(circle at 20% 10%, #172554, #070b17 48%, #05060b); color:#eef2ff;`;
const Header = styled.header`position:fixed; inset:0 0 auto; z-index:20; border-bottom:1px solid #ffffff18; background:#070b17e8; backdrop-filter:blur(14px);`;
const HeaderInner = styled.div`width:min(960px,calc(100% - 36px)); min-height:70px; margin:auto; display:flex; align-items:center; justify-content:space-between; gap:1rem;`;
const Brand = styled.a`display:inline-flex; align-items:center; gap:9px; color:#fff; text-decoration:none; img{width:34px;height:34px;border-radius:8px;border:1px solid #ffffff22} span{display:grid;gap:2px} small{color:#93c5fd;font-size:9px;letter-spacing:.14em;font-weight:700} strong{font-size:15px;}`;
const Navigation = styled.nav`display:flex;gap:.4rem;align-items:center; a{display:inline-flex;align-items:center;gap:.35rem;padding:.55rem .7rem;border:1px solid transparent;border-radius:.6rem;color:#cbd5e1;text-decoration:none;transition:color .18s,border-color .18s,box-shadow .18s} a:hover,a:focus-visible{color:#fff;border-color:#93c5fd88;box-shadow:0 0 0 3px #93c5fd18;outline:none} @media(max-width:620px){position:absolute;inset:70px 18px auto;display:${({$open})=>$open?"grid":"none"};padding:.6rem;border:1px solid #ffffff1c;border-radius:1rem;background:#111827;box-shadow:0 1.2rem 3rem #0006; a{width:100%;}}`;
const MenuButton = styled.button`display:none;width:38px;height:38px;place-items:center;color:#fff;background:transparent;border:1px solid #ffffff24;border-radius:.6rem;cursor:pointer;@media(max-width:620px){display:grid} &:hover,&:focus-visible{border-color:#93c5fd88;box-shadow:0 0 0 3px #93c5fd18;outline:none}`;
const Hero = styled.section`width:min(720px,calc(100% - 36px)); margin:0 auto; padding:clamp(8rem,20vh,12rem) 0 10rem; text-align:center; .icon{} h1{margin-top:.9rem;font-size:clamp(3rem,9vw,6.5rem);line-height:.95;letter-spacing:-.06em} p{max-width:560px;margin:1.2rem auto 0;color:#cbd5e1;font-size:1.05rem;line-height:1.7} `;
const Icon = styled.div`width:4rem;height:4rem;margin:auto;display:grid;place-items:center;border-radius:1.25rem;color:#bae6fd;background:linear-gradient(135deg,#2563eb,#7c3aed);box-shadow:0 1rem 3rem #2563eb44;font-size:2rem;`;
const Eyebrow = styled.span`display:block;margin-top:1.4rem;color:#93c5fd;text-transform:uppercase;letter-spacing:.18em;font-size:.72rem;font-weight:700;`;
const Actions = styled.div`display:flex;justify-content:center;flex-wrap:wrap;gap:.75rem;margin-top:1.75rem;a{display:inline-flex;align-items:center;gap:.45rem;padding:.8rem 1rem;border-radius:.8rem;background:#e0f2fe;color:#172554;text-decoration:none;font-weight:700;transition:border-color .18s,box-shadow .18s} a:hover{border-color:#fff;box-shadow:0 .75rem 1.5rem #0005} a.secondary{background:#ffffff12;color:#e0e7ff;border:1px solid #ffffff1c}`;
const Footer = styled.footer`width:min(960px,calc(100% - 36px));margin:0 auto 1.5rem;padding:1.4rem 0 0;border-top:1px solid #ffffff1c;color:#94a3b8;`;
const FooterTop = styled.div`display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;`;
const SocialLinks = styled.nav`display:flex;flex-wrap:wrap;gap:7px;a{width:34px;height:34px;display:grid;place-items:center;color:#94a3b8;border:1px solid #ffffff1c;border-radius:8px;transition:color .18s,border-color .18s,box-shadow .18s}a:hover,a:focus-visible{color:#fff;border-color:#93c5fd88;box-shadow:0 0 0 3px #93c5fd18;outline:none}`;
const Copyright = styled.small`display:block;margin-top:1rem;padding-top:1rem;border-top:1px solid #ffffff12;a{color:#fff}`;
const TopButton = styled.button`position:fixed;right:22px;bottom:22px;z-index:15;width:42px;height:42px;display:grid;place-items:center;color:#fff;background:#1e293b;border:1px solid #93c5fd88;border-radius:999px;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .18s,border-color .18s,box-shadow .18s;&[data-visible="true"]{opacity:1;pointer-events:auto}&:hover,&:focus-visible{border-color:#bae6fd;box-shadow:0 0 0 4px #93c5fd20;outline:none}`;
