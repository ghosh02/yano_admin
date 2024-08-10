import React, { useState, useEffect } from "react";
import CustomCheckbox from "../components/CheckBox";
import { Button } from "@/components/ui/button";
import downgray from "../assets/icons/downgray.png";
import closegray from "../assets/icons/closegray.png";

export default function Notification({ handleClose }) {
  const [pushNotification, setPushNotification] = useState(false);
  const [sms, setSms] = useState(false);
  const [email, setEmail] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafafa] bg-opacity-20">
      <div className="bg-white w-[600px] p-5 rounded-[8px] shadow-3xl">
        <div className="flex items-center justify-between mb-[32px]">
          <h2 className="text-[#00263E] text-[20px] font-Poppins font-semibold ">
            Send a message
          </h2>
          <img
            src={closegray}
            alt=""
            onClick={handleClose}
            className="w-[16px] h-[16px] object-contain cursor-pointer"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium text-[#00263E] mb-2">To</label>
            <div className="flex justify-between items-center border px-[16px] py-[14px] rounded-[8px]">
              <p>Jenny Wilson</p>
              <img
                src={downgray}
                alt=""
                className="w-[10px] h-[5px] object-contain"
              />
            </div>
            {/* {isDropdownOpen && (
              <div className="absolute h-[200px] bg-black border rounded shadow-md w-[560px] mt-2 z-50"></div>
            )} */}
          </div>
          <div className="my-5">
            <label className="block font-medium text-[#00263E] mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full text-[#455560] border px-4 py-[14px] rounded-[8px] outline-none"
              //   placeholder="Enter subject here"
            />
          </div>
          <div className="my-5">
            <label className="block font-medium text-[#00263E] mb-2">
              Send via
            </label>
            <div className="flex items-center gap-4">
              <CustomCheckbox
                label="Push notification"
                checked={pushNotification}
                onChange={() => setPushNotification(!pushNotification)}
              />
              <CustomCheckbox
                label="SMS"
                checked={sms}
                onChange={() => setSms(!sms)}
              />
              <CustomCheckbox
                label="Email"
                checked={email}
                onChange={() => setEmail(!email)}
              />
            </div>
          </div>
          <div className="my-5">
            <label className="block font-medium text-[#00263E] mb-2">
              Message
            </label>
            <textarea
              className="w-full bg-[#fafafa] text-[#455560] text-[14px] border rounded-[8px] px-[16px] py-[14px] outline-none"
              rows="4"
              //   placeholder="Type the message here..."
            />
          </div>
          <div className="flex justify-start gap-2">
            <Button
              type="button"
              className="bg-white border-[#00263E] border rounded-[8px] text-[#00263E] font-medium"
              //   onClick={() => console.log("Cancel")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#00263E] font-medium rounded-[8px] text-white"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
