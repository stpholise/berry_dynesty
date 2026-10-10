import Image from "next/image";



const ChatWhatsapp = () => {
    const message =""
    const phoneNumber =""
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a
    href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp "
      className="z-80 fixed bottom-4 right-6 rounded-sm size-9 p-1  bg-[#25D366]">
      <Image
        src={"/icons/whatsapp.svg"}
        alt={"whatsapp icon"}
        width={40}
        height={40}
        className=""
      />
    </a> 
  );
};

export default ChatWhatsapp;
