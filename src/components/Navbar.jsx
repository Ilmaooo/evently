import logo from "../assets/images/logo.svg";
import Button from "../components/Button";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="py-20 px-40 flex items-center" />
        <div className="flex items-center px-40">
        <Button/>
        <button
        onClick={() => {
            window.location.href = `/evently/login`;
        }}          
        className="text-white font-Montserrat hover:decoration-dashed tracking-wide">Login</button>
        </div>
    </div>
  );
};

export default Navbar;
