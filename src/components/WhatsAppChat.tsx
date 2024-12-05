import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

const WhatsAppChat = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="whatsapp-wrapper"
      style={{ position: "fixed", right: "20px", bottom: "160px" }}
    >
      <FloatingWhatsApp
        phoneNumber="+233247642813"
        accountName="Bismark Kadogbe"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="/assets/bismark.jpg"
        statusMessage="Typically replies within an hour"
        chatMessage="Hello! 👋 How can I help you?"
        placeholder="Type a message..."
        darkMode={theme === "dark"}
        className="whatsapp-chat"
      />
    </div>
  );
};

export default WhatsAppChat;
