import * as React from "react";
import { FunctionComponent } from "react";

interface IProps {
  name?: string;
}

export const DemoButton: FunctionComponent<IProps> = ({ name }) => {
  return (
    <button>
      Hello {name || "user"}
    </button>
  );
};
