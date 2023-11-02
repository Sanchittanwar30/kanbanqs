import React from "react";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

// CardComponent is a functional component that renders a card with title, description, and a button.
function CardComponent({ title, description, buttonText }) {
  return (
    // The outer Card component for styling and structure.
    <Card className="card">
      {/* The card-body div to contain the content. */}
      <div className="card-body">
        {/* Display the title with a green checkmark icon. */}
        <h5 className="card-title">
          <CheckCircleOutlined
            style={{ marginRight: "5px", color: "#52c41a" }}
          />
          {title}
        </h5>
        {/* Display the description with a yellow exclamation icon. */}
        <p className="card-text">
          <ExclamationCircleOutlined
            style={{ marginRight: "5px", color: "#faad14" }}
          />
          {description}
        </p>
        {/* Display a button with a user icon. */}
        <a href="#" className="btn btn-primary">
          <UserOutlined style={{ marginRight: "5px" }} />
          {buttonText}
        </a>
      </div>
    </Card>
  );
}

export default CardComponent;
