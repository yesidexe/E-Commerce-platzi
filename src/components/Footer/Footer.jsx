import Link from "next/link";

function Footer() {
    return ( 
        <footer className="w-full h-10 mt-16">
            <p className="text-center leading-10 text-black/60">
                by <Link target="_blank" href={'https://github.com/yesidexe'}>yesid.exe</Link> 
            </p>
        </footer>
    );
}

export default Footer;