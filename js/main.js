class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <center><div class="notice">
                <h3>Website under construction <br><sup>Some elements may appear incorrectly or unfinished.</sup></h3>
            </div></center>
            <header class="nav">
                <nav class="navEl">
                    <ul>
                        <a href="../index.html"><li><h2>Firalia</h2></li></a>
                        <a href="../walls.html"><li>Wallpapers</li></a>
                        <a href="../comms.html"><li>Commissions</li></a>
                        <a href="../ocs.html"><li>Characters</li></a>
                        <a href="../rp.html"><li>Roleplay</li></a>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define('navbar-element', navBar)


class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <center><footer>
                <div class="copyright">
                    <p id="copF">&copy Firalia 2022</p>
                    <p>
                    Various images include assets belonging to SQUARE ENIX CO., LTD. All Rights Reserved. (Not affiliated), <br><a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icon by Maxim Basinski Premium, </a>
                    </p>
                    </div>
                    <div class="socials">
                    <a rel="me" href="https://etheirys.masto.host/@firalia"><img id="mastodon" src="../images/icons/mastodon white.png"></a>
                    <a href="mailto:Firalia+business@proton.me"><img id="mail" src="../images/icons/mail white.png"></a>
                </div>
            </footer></center>
        `
    }
}

customElements.define('footer-element', footer)