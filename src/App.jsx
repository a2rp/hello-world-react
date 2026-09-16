import { FiArrowUpRight, FiGithub, FiGlobe, FiHeart } from "react-icons/fi";
import styled from "styled-components";

function App() {
    return <Page><main><Icon><FiGlobe /></Icon><Eyebrow>React starter</Eyebrow><h1>Hello World</h1><p>A clean, friendly starting point for building your next interface with React and Vite.</p><Actions><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Explore React <FiArrowUpRight /></a><a className="secondary" href="https://github.com/a2rp/hello-world-react" target="_blank" rel="noopener noreferrer"><FiGithub /> View source</a></Actions></main><Footer><span><FiHeart /> Built with React</span><span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span></Footer></Page>;
}
export default App;

const Page = styled.div`min-height:100dvh; display:grid; place-items:center; padding:2rem; background:radial-gradient(circle at 20% 10%, #172554, #070b17 48%, #05060b); color:#eef2ff;`;
const Icon = styled.div`width:4rem; height:4rem; display:grid; place-items:center; border-radius:1.25rem; color:#bae6fd; background:linear-gradient(135deg,#2563eb,#7c3aed); box-shadow:0 1rem 3rem #2563eb44; font-size:2rem;`;
const Eyebrow = styled.span`display:block; margin-top:2rem; color:#93c5fd; text-transform:uppercase; letter-spacing:.18em; font-size:.72rem; font-weight:700;`;
const Actions = styled.div`display:flex; flex-wrap:wrap; gap:.75rem; margin-top:1.75rem; a { display:inline-flex; align-items:center; gap:.45rem; padding:.8rem 1rem; border-radius:.8rem; background:#e0f2fe; color:#172554; text-decoration:none; font-weight:700; transition:transform .2s, box-shadow .2s; } a:hover { transform:translateY(-3px); box-shadow:0 .75rem 1.5rem #0005; } a.secondary { background:#ffffff12; color:#e0e7ff; border:1px solid #ffffff1c; }`;
const Footer = styled.footer`position:fixed; bottom:1.25rem; left:2rem; right:2rem; display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; color:#94a3b8; font-size:.78rem; a { color:#dbeafe; } span { display:inline-flex; align-items:center; gap:.35rem; } @media(max-width:600px){left:1rem;right:1rem;}`;
