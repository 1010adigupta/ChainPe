import { useDispatch, useSelector } from "react-redux";
import { useChainState } from "../../redux/chainSlice";

const useChain = () => {
  const { chain }: { chain } = useSelector(useChainState);

  return chain;
};

export default useChain;
