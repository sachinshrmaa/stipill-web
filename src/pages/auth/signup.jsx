import Head from "next/head";
import Link from "next/link";
import axios from 'axios';

import { useState } from "react";
import { useRouter } from 'next/router'



const SignUp = () => {
    const router = useRouter()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch("https://api.stipill.in/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
  
        if (response.ok) {
          router.push("/auth/login");
        } else {
          const data = await response.json();
          setError(data.message);
        }
      } catch (error) {
        console.error(error);
        setError("An unexpected error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
  

    return (  
        <div className="col-md-8 col-11 m-auto py-5 ">
            <Head>
                <title>Sign Up - Stipill</title>
                <meta name="description" content="Create a free Account" />
            </Head>

            <h2 className="heading text-center mb-5">Create an Account</h2>

            <form onSubmit={handleSubmit} className="form-groups mt-5">

                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="name" className="text-sm text-muted mb-1">Name *</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control mb-3" 
                    />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="email" className="text-sm text-muted mb-1">Email *</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control mb-3" 
                    />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <label htmlFor="password" className="text-sm text-muted mb-1">Password *</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control mb-3" 
                    />
                </div>
                <div className="col-md-6 col-11 m-auto">
                    <button type="submit" disabled={isLoading}  className="form-control btn button my-4" >
                        {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
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