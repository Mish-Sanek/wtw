import { useSelector } from "react-redux";

export const getRuntimeTamplate = (runTime) => {
  const normalizedTime = {
    hours: Math.floor(runTime / 60),
    minutes: runTime % 60
  }

  return normalizedTime;
}
