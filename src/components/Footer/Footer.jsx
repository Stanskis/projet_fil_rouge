import './Footer.css'

export default function Footer(){

    return(
        <footer className="bg-dark footer overflow-hidden">
            <div className="container my-4 d-flex justify-content-between text-center">
                <div className="container d-flex flex-column">
                    <a href="/">Homepage</a>
                    <a href="/pc-builder">PC-Builder</a>
                    <a href="/products">Products</a>
                    <a href="/guides">Guides</a>
                    <a href="/forum">Forum</a>
                </div>
                <div className="container d-flex flex-column">
                    <a href="#">Account</a>
                    <a href="#">Messages</a>
                    <a href="#">Favourites</a>
                    <a href="#">Log Out</a>
                </div>
                <div className="container d-flex flex-column">
                    <a href="#">Contacts</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
            <hr className="text-white"/>
            <div className="container text-center text-white my-3">Copyright 2024</div>
        </footer>
    )


}