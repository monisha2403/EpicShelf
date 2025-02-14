import Page from "../components/Page";
import "./RegisterPage.css";

function RegisterPage() {
    return (
        <Page>
            <div className="register-page">
                <h1>Register</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </Page>
    );
}

export default RegisterPage;