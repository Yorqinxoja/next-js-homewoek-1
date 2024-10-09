"use client";

import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "antd";

const Sidebar = () => {
  return (
    <div className="absolute top-4 left-6">
      <Link href="/" passHref>
        <Button
          type="primary"
          icon={<BiArrowBack size={20} />}
          className="bg-indigo-700 flex items-center text-white rounded-md shadow transition-transform duration-200 transform hover:scale-105"
        >
          Back
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;
