import React from "react";
import { useAppSelector } from "../../../../../store/hooks";

import Add from "./Add";
import Remove from "./Remove";
import Rename from "./Rename";

interface Props {
  renameHandler: Function;
}

export default function Behavior({ renameHandler }: Props) {
  const behavior: Array<JSX.Element> = [];
  const selectedType = useAppSelector((state) => state.select.selected?.type);

  if (selectedType === undefined) {
    behavior.push(<Add key={0} type="Heading" />);
    behavior.push(<Add key={1} type="SubHeading" />);
  } else if (selectedType === "Heading") {
    behavior.push(<Add key={1} type="SubHeading" />);
    behavior.push(<Remove key={2} />);
    behavior.push(<Rename key={3} renameHandler={renameHandler} />);
  } else {
    behavior.push(<Remove key={2} />);
    behavior.push(<Rename key={3} renameHandler={renameHandler} />);
  }

  return <div>{behavior}</div>;
}
