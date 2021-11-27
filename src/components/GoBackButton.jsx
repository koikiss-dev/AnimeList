import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Tippy
      content="go back"
      placement="bottom"
      interactive={true}
      followCursor={true}
      hideOnClick={false}
    >
      <button
        style={{
          border: "none",
          backgroundColor: "var(--color-primary)",
          padding: "1rem",
          borderRadius: "5px",
          top: "10px",
          left: "10px",
          cursor: "pointer",
          position: "absolute",
        }}
        onClick={() => navigate(-1)}
      >
        <box-icon name="arrow-back" color="#ffffff"></box-icon>
      </button>
    </Tippy>
  );
};

export default GoBackButton;
