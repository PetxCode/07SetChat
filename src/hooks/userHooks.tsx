import { useSelector } from "react-redux";
import useSWR from "swr";
import { getAllUser, getUser } from "../api/userAPI";

export const userHooks = () => {
  const userID = useSelector((state: any) => state.user);

  const { data, isLoading } = useSWR(
    `${userID}/get-one-user`,
    () => getUser(userID!),
    { refreshInterval: 5000 }
  );
  return { data, isLoading };
};

export const allUserHooks = () => {
  const { data: allUser, isLoading } = useSWR(`all-user`, getAllUser, {
    refreshInterval: 5000,
  });
  return { allUser, isLoading };
};
