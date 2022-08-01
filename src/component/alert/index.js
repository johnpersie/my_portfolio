import React from "react";
import { Checked, Container, Popup } from "./AlertStyles";

const Alert = (props) => {
  return (
    props.alert && (
      <Container>
        <Popup>
          <div>
            <Checked />
            {props.alert.msg}
          </div>
          <p>&nbsp;{props.alert.type}</p>
        </Popup>
      </Container>
    )
  );
};

export default Alert;
