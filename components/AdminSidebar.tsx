import React from "react";
import Link from "next/link";

type Props = {};

const AdminSidebar = (props: Props) => {
  return (
    <aside>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        <div className="flex items-center justify-center h-10 w-full mb-10 mt-4 px-4">
          {/* <div className="h-2 w-2 bg-white rounded-full"></div> */}
          <div className="text-xl italic">Shade E-Com App</div>
        </div>
        <div className="flex flex-col items-center flex-1 w-full">
          <ul className="w-full">
            <Link href="/" target="_blank">
              <li className="p-3 hover:bg-slate-50 hover:text-primary">
                Canlı Siteyi Görüntüle
              </li>
            </Link>
            <Link href="/admin">
              <li className="p-3 hover:bg-slate-50 hover:text-primary">
                Anasayfa
              </li>
            </Link>
            <Link href="/admin/products" className="">
              <li className="p-3 hover:bg-slate-50 hover:text-primary">
                Ürünler
              </li>
            </Link>
            <Link
              href="admin/category"
              className="pointer-events-none opacity-50"
            >
              <li className="p-3 hover:bg-slate-50 hover:text-primary">
                Kategoriler
              </li>
            </Link>
            <Link href="admin/blog" className="pointer-events-none opacity-50">
              <li className="p-3 hover:bg-slate-50 hover:text-primary">Blog</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center h-10 w-full">
          Copyright © 2023
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
