import { useState } from "react";

function App() {
    // 1. State for form input fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // 2. State to track if form was submitted
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload

        // Requirement Check: Don't allow empty or whitespace-only submissions
        if (!name.trim() || !email.trim()) {
            return;
        }

        // Save the submitted email so we can display it in the confirmation message
        setSubmittedEmail(email);
        setIsSubmitting(true);

        // Bonus Challenge: Clear form input fields after successful subscription
        setName("");
        setEmail("");
    };

    // Bonus Challenge: Reset function to allow subscribing with another email
    const handleReset = () => {
        setIsSubmitting(false);
        setSubmittedEmail("");
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            {/* CONDITIONAL RENDERING: Show Confirmation Message OR Form */}
            {isSubmitting ? (
                /* --- CONFIRMATION SCREEN --- */
                <div className="alert alert-success text-center p-4 shadow-sm" role="alert">
                    {/* Bonus Challenge: Styled with success color (green) */}
                    <p className="mb-3">
                        Please check your email (<strong>{submittedEmail}</strong>) for confirmation.
                    </p>

                    <hr />

                    {/* Bonus Challenge: Link to reset the form */}
                    <button onClick={handleReset} className="btn btn-link text-success text-decoration-underline p-0 fw-bold">
                        Subscribe to another email
                    </button>
                </div>
            ) : (
                /* --- SUBSCRIPTION FORM --- */
                <div className="card p-4 shadow-sm">
                    <h2 className="fw-bold mb-3 text-center">Newsletter Subscription</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label fw-semibold">
                                Name:
                            </label>
                            <input type="text" className="form-control" id="userName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="userEmail" className="form-label fw-semibold">
                                Email address:
                            </label>
                            <input type="email" className="form-control" id="userEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100 fw-bold">
                            Subscribe
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
