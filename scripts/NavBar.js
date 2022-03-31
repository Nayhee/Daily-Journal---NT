export const NavBar = () => {
    return `
        <nav class="navigation">
        <div class="navLogoAndTitleContainer">
            <img src="logo.png" alt="logo">
            <h1>Nayhee's Journal</h1>    
        </div>

            <div class="navLoginAndLogoutContainer">
                <div class="navigation__item navigation__login">
                    <button id="loginButton" class="loginAndLogoutButton">Login</button>
                </div>
                <div class="navigation__item navigation__logout">
                    <button id="logoutButton" class="loginAndLogoutButton">Logout</button>
                </div>
            </div>
        </nav>
    `
}

