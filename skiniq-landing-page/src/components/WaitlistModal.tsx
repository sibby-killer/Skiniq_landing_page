import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

export const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission logic here
    console.log("Email submitted:", email);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
        <p className="mb-4">
          Be the first to know when we launch! Enter your email below to join
          our waitlist.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-md p-2 w-full mb-4"
          />
          <Button type="submit" className="w-full">
            Join Waitlist
          </Button>
        </form>
      </div>
    </Modal>
  );
};