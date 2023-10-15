import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="body-div">
      <h1 className="text-center p-4">Kontak</h1>
      <form>
        <h1>Kontak</h1>
        <input type="text" name="name" id="" placeholder="Nama" />
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="phone" name="phone" id="" placeholder="No. Ponsel" />
        <textarea name="message" id="" cols="30" rows="10" placeholder="Pesan" />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default Contact;
