// libs
import { useDispatch, useSelector } from "react-redux";

export default function useRedux(selector) {
  const dispatch = useDispatch();

  const rData = useSelector((s) => s[selector]);

  return { rData, dispatch };
}
