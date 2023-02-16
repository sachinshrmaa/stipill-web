import Link from "next/link";

const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href='/' className="navbar-brand"><span id="logo">stipill</span> </Link>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link ms-3" href="/auth/login">Log In</Link>
                        <Link class="nav-link ms-3 btn button-outline px-4" href="/auth/signup">Sign Up</Link>
                    </div>
                </div>
            </div>  
        </nav>
    );
}
 
export default Navbar;