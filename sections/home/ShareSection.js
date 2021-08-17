import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  FaCheck,
  FaCopy,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ShareSection = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (window && window.location.href) {
      setUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
      return () => {
        clearTimeout(() => {
          setCopied(false);
        }, 1500);
      };
    }
  }, [copied]);

  const handleCopy = (e) => {
    e.preventDefault();

    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(url);
      return;
    }
    navigator.clipboard.writeText(url).then(
      function () {
        setCopied(true);
      },
      function (err) {
        // console.error("Async: Could not copy text: ", err);
      }
    );
  };

  const fallbackCopyTextToClipboard = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      if (successful) {
        setCopied(true);
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <section className="py-12">
      <div className="container">
        <h2 className=" text-center font-bold text-3xl mb-12">
          {t("Share With")}
        </h2>
        <div className="w-full rounded-md flex  md:h-32 flex-wrap md:flex-nowrap shadow-lg ">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full  rounded-t-md md:rounded-t-none md:rounded-s-md "
            style={{ background: "#547BBC" }}
          >
            <FaFacebookF className="object-contain text-white" size={26} />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=Lets+be+BuilderZ+and+build+our+kids%27+minds+%3Awink%3A+Register+Now+`}
            target="_blank"
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full"
            style={{ background: "#79CBF0" }}
          >
            <FaTwitter className="object-contain text-white" size={26} />
          </a>

          <a
            href={`mailto:?body=${url}`}
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full"
          >
            <img
              src="/images/gmail.png"
              alt="email icon"
              className="object-contain h-7 "
              size={26}
            />
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${url}+Lets+be+BuilderZ+and+build+our+kids%27+minds+%3Awink%3A+Register+Now+`}
            target="_blank"
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full"
            style={{ background: "#00DB67" }}
          >
            <FaWhatsapp className="object-contain text-white" size={26} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=&summary=&source=`}
            target="_blank"
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full"
            style={{ background: "#007BB6" }}
          >
            <FaLinkedinIn className="object-contain text-white" size={26} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center h-16 md:h-auto  md:flex-1 w-full rounded-b-md md:rounded-b-none md:rounded-e-md"
            onClick={handleCopy}
          >
            {copied ? (
              <FaCheck className="object-contain text-green-600" size={26} />
            ) : (
              <FaCopy className="object-contain" size={26} />
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
