import React, { useState } from "react";
import './forgotPassword.css';

const ForgotPassword = () => {
          const [email, setEmail] = useState("");

          const handleSubmit = (event) => {
                    event.preventDefault();
                    console.log(`Password reset link sent to: ${email}`)
                    alert('Password reset link sent to your email address.')
          };

          return (
                    <div className="forgot-password-container">
                              <h2>Forgot Password</h2>
                              <form onSubmit={handleSubmit}>
                                        <label htmlFor="email">Email</label>
                                        <input 
                                          onChange={(e) => setEmail(e.target.value)}
                                          type="email"
                                          id="email"
                                          name="email" 
                                        />
                                        <button type="submit">Send Reset Link</button>
                              </form>
                    </div>
          )
}

export default ForgotPassword;