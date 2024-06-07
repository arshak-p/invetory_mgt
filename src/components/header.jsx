import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="bg-red-600 w-full h-30 p-3 flex gap-5 justify-center place-items-center">

            <Link to={'/add-product'}>
                <p className="cursor-pointer hover:text-black hover:font-bold">Add product</p>
            </Link>
            
            <Link to={'/product-list'}>
                <p className="cursor-pointer hover:text-black hover:font-bold">Products</p>
            </Link>

            <Link to={'/stock-manage'}>
                <p className="cursor-pointer hover:text-black hover:font-bold">Stock Management</p>
            </Link>

        </div>
    )
}

export default Header