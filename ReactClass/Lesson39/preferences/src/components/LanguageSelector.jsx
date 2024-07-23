import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("pt")}>Português</button>
    </div>
  );
};

export default LanguageSelector;
