import { createContext, useState } from "react";

interface ProfileContextValue {
  data: {
    id: string;
    email: string;
    name: string;
    roles: string[];
  };
  setData: (data: any) => void;
  removeData: () => void;
}

const initData: ProfileContextValue = {
  data: {
    id: "",
    email: "",
    name: "",
    roles: [],
  },
  setData: () => {},
  removeData: () => {},
};

export const ProfileContext = createContext<ProfileContextValue>(initData);

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState(initData.data);

  const handleSetData = (newData: any) => {
    localStorage.setItem("profile", JSON.stringify(newData));
    setData(newData);
  };

  const storageData = JSON.parse(localStorage.getItem("profile") || "null");

  const removeData = () => {
    localStorage.removeItem("profile");
    setData(initData.data);
  };

  return (
    <ProfileContext.Provider
      value={{
        data: storageData || data,
        setData: handleSetData,
        removeData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;
