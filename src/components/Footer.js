const Footer = () => {
    return (
        <footer className="flex flex-row w-full px-10 justify-between text-center text-white font-medium pt-2 pb-4">
            <div>
                Created With ❤️ By{" "}
                <a className="text-yellow-500" href="https://www.github.com/AdityaMayukhSom">
                    Aditya Mayukh Som
                </a>
            </div>
            <div id="copyright">
                Copyright &copy; <span className="text-yellow-500">{new Date().getFullYear()}</span>. All Rights Reserved.
            </div>
        </footer>
    );
};
export default Footer;
