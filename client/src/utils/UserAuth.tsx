import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./userContext";
import { Types } from "mongoose";

const UserAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState<{
    _id: Types.ObjectId | string;
    fullname: string;
    email: string;
    createdAt: Date;
  }>({
    _id: "",
    fullname: "",
    email: "",
    createdAt: new Date(),
  });

  const [userLogin, setUserLogin] = useState<boolean>(false);

  const userLogout = (): void => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    const fetchedData = async (): Promise<void> => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const res = await axios.get("/api/authorise", config);
        if (res.status === 201) {
          const { _id, fullname, email, createdAt } = res.data;
          setUser({
            _id,
            fullname,
            email,
            createdAt,
          });
        }
      } catch (err) {
        localStorage.removeItem("token");
      }
    };

    fetchedData();
  }, [token, userLogin]);

  return (
    <UserContext.Provider value={{ user, setUserLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserAuth;
