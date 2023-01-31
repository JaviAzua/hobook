import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="relative mt-10 min-h-[10vh] bg-slate-100 flex justify-around py-3">
      <div>
        <h5 className="font-bold tracking-widest text-[#5DDA80]">About</h5>
        <p className="footerItem">Careers</p>
        <p className="footerItem">Blog</p>
        <p className="footerItem">About</p>
        <p className="footerItem">Investor Relations</p>
      </div>
      <div>
        <h5 className="font-bold tracking-widest text-[#5DDA80]">Community</h5>
        <p className="footerItem">Business Card</p>
        <p className="footerItem">Shop with Points</p>
        <p className="footerItem">Reload Your Balance</p>
        <p className="footerItem">Currency Converter</p>
      </div>
      <div>
        <h5 className="font-bold tracking-widest text-[#5DDA80]">Host</h5>
        <p className="footerItem">Business Card</p>
        <p className="footerItem">Shop with Points</p>
        <p className="footerItem">Reload Your Balance</p>
        <p className="footerItem">Currency Converter</p>
      </div>
      <div>
        <h5 className="font-bold tracking-widest text-[#5DDA80]">Support</h5>
        <p className="footerItem">Your Account</p>
        <p className="footerItem">Your Orders</p>
        <p className="footerItem">Shipping</p>
        <p className="footerItem">Manage Your Content</p>
        <p className="footerItem">Help</p>
      </div>
      <p className="absolute bottom-0 text-sm">
        Web site made by Javier Azua for educational purposes
      </p>
    </div>
  );
}
