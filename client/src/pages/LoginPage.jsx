import Page from "../components/Page";
import "./LoginPage.css";

function LoginPage() {
    return (
        <Page>
            <div className="login-page">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </Page>
    );
}

export default LoginPage;