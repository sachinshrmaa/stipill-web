import Head from "next/head";
import Link from "next/link";

import { useState } from "react";



const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://63efc2a8c59531ccf1766922.mockapi.io/auth/users", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
        })

        if (response.ok) {
        // redirect to success page or login page
        } else {
        // handle error response
        }
    }


    return (  
        <div className="col-md-8 col-11 m-auto py-5 ">
            <Head>
                <title>Sign Up - Stipill</title>
                <meta name="description" content="Create a free Account" />
            </Head>

            <h2 className="heading text-center mb-5">Create an Account</h2>

            <form onSubmit={handleSubmit} className="form-groups mt-5">
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="username" className="text-sm text-muted mb-1">Username *</label>
                    <input type="text" name="username" id="username" value={username} className="form-control mb-3" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="email" className="text-sm text-muted mb-1">Email *</label>
                    <input type="email" name="email" id="email" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="password" className="text-sm text-muted mb-1">Password *</label>
                    <input type="password" name="password" id="password" className="form-control mb-3" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <input type="submit" value="Sign Up &rarr;" className="form-control btn button my-4" />
                </div>
            </form>

            <div class="text-center">
                <small class="text-muted">Already have an account?<Link href="/auth/login" className="text-decoration-none"> Log In</Link> instead.</small> <br />
                <small class="text-muted"> by joining to Stipill you agree the <Link href='/legal/terms' className="text-decoration-none">terms</Link> and <Link href='/legal/privacy' className="text-decoration-none">privacy policy</Link>.</small>
            </div>

        </div>
    );
}
 
export default SignUp;