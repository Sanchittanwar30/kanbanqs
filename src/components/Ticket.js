import React from "react";
import CardComponent from "./Card";
import "./Ticket.css";

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

// Ticket component displays a ticket's information in a CardComponent.
const Ticket = ({ ticket }) => {
  const { title, status, priority, user } = ticket;

  return (
    // Render a CardComponent to display ticket information.
    <CardComponent
      title={title}
      description={
        // Use React fragments to group multiple lines of content.
        <>
          <span>
            {/* Display the status with a green checkmark icon. */}
            <CheckCircleOutlined
              style={{ marginRight: "5px", color: "#52c41a" }}
            />
            Status: {status}
          </span>
          <br />
          <span>
            {/* Display the priority with a yellow exclamation icon. */}
            <ExclamationCircleOutlined
              style={{ marginRight: "5px", color: "#faad14" }}
            />
            Priority: {priority}
          </span>
          <br />
          <span>
            {/* Display user information with a user icon. */}
            <UserOutlined style={{ marginRight: "5px" }} />
            Assigned to: {user}
          </span>
        </>
      }
      buttonText="View Details"
    />
  );
};

export default Ticket;
