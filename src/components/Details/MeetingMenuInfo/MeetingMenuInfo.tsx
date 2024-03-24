import React from "react";

interface MenuItemProps {
  title: string;
  description: string;
  icon: string;
}

const MeetingMenuItem: React.FC<MenuItemProps> = ({ title, description, icon }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <img alt={icon} />
      </div>
      <div
        className="mzp-c-field-info"
        style={{ color: "#000000", fontStyle: "italic", textAlign: "left" }}
      >
        {description}
      </div>
    </div>
  );
};

export default MeetingMenuItem;
