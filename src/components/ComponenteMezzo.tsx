import PersonInput from "./PersonInput";

import {PersonInfo} from "../Interfacce";

export default function ComponenteMezzo(props: {
    onClick: (value: PersonInfo) => void;
}) {
  const { onClick } = props;
  return (
    <>
      <PersonInput onClick={onClick} />
    </>
  );
}
