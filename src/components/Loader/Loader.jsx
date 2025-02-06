import css from "./Loader.module.css";

import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <TailSpin
      visible={true}
      height="60"
      width="60"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperClass={css.loader}
    />
  );
}
