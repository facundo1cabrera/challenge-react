import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {

    const [selected, setSelected] = useState({
      bikes: false,
      accessories: false,
      apparel: false
    });

    return (
        <header className="w-full py-4">
        <div className="flex justify-between max-w-6xl m-auto items-center">
          <Link href="/">
            <img 
              className="object-contain"
              src="/logo.png"
            />
          </Link>
          <div className="">
            <ul className="hidden sm:flex gap-6">
              <li className="text-lg font-medium hover:text-purple-600"
              >
                <Link href="/?type=bike">
                  Bikes
                </Link>
              </li>
              <li className="text-lg font-medium hover:text-purple-600">
                <Link href="/?type=accessorie">
                  Accessories
                </Link>
              </li>
              <li className="text-lg font-medium hover:text-purple-600">
                <Link href="/?type=apparel">
                  Apparel
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="hidden sm:flex gap-6">
              <li>USD </li>
              <li>C</li>
              <li>-_-</li>
            </ul>
          </div>
          <div className="block sm:hidden">
            Hamb
          </div>
        </div>
      </header>
    );
};

export default Header;