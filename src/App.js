import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import "./App.css";

function App() {
  const [link, setLink] = useState("https");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function hadleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (erro, url) {
        setQrcodeLink(url);
      }
    );
  }

  function hadleQrcode(e) {
    setLink(e.target.value);
    hadleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <h1>Gerador de QrCode</h1>
      <div className="qrcode">
        <QRCode value={link}></QRCode>

        <input
          className="input"
          placeholder="Digite seu link..."
          value={link}
          onChange={(e) => hadleQrcode(e)}
        ></input>
        <a href={qrcodeLink} download={`qrcode.png`}>
          {" "}
          Baixar QrCode
        </a>
      </div>
    </div>
  );
}

export default App;
