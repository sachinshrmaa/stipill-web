import Head from "next/head";
import Link from "next/link";


const Login = () => {
    return (  
        <div className="col-md-8 col-11 m-auto py-5 ">
            <Head>
                <title>Log In - Stipill</title>
                <meta name="description" content="Welcome back to Stipill" />
            </Head>
            
            <h2 className="heading text-center mb-5">Welcome Back!</h2>

            <form action="#" className="form-groups mt-5">
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="username" className="text-sm text-muted mb-1">Username *</label>
                    <input type="text" name="username" id="username" className="form-control mb-3" />
                </div>
               
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="password" className="text-sm text-muted mb-1">Password *</label>
                    <input type="password" name="password" id="password" className="form-control mb-3" />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <input type="submit" value="Login" className="form-control btn button my-4" />
                </div>
            </form>   

            <div class="text-center">
                <small> <Link href='/auth/forgot-password' className="text-decoration-none">Forgot your Password?</Link> </small> <br />
                <small class="text-muted">New to Stipill? <Link href='/auth/signup' className="text-decoration-none">Create an Account</Link> Instead.</small> <br />
                <small class="text-muted">by using Stipill you agree the <Link href='/legal/terms' className="text-decoration-none">terms</Link> and <Link href='/legal/privacy' className="text-decoration-none">privacy policy</Link>.</small>
            </div>

        </div>
    );
}
 
export default Login;