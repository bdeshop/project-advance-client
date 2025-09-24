import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW
  const [logo, setLogo] = useState(null);
  const [id, setId] = useState(null);
  const [sliders, setSliders] = useState([]);
  const [settings, setSettings] = useState({ title: "", favicon: "" });
  const [signupImage, setSignupImage] = useState(null);
  const [signupId, setSignupId] = useState(null);
  const [loginImage, setLoginImage] = useState(null);
  const [loginImageId, setLoginImageId] = useState(null);
  const [AdminLoginImage, setAdminLoginImage] = useState(null);
  const [navbar, setNavbar] = useState({});
  const [webMenu,setWebMenu] = useState({})
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false); // Finished loading
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // backend থেকে logo ফেচ
  const fetchLogo = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/logo");

      // যদি ডাটাবেসে logo থাকে
      if (data && data.logoUrl) {
        setLogo(data.logoUrl);
        setId(data._id);
        console.log(logo);
        console.log("Fetched logo:", data.logoUrl);
      } else {
        console.log("No logo found in DB");
        setLogo(null); // fallback
      }
    } catch (error) {
      console.error("Error fetching logo:", error);
    }
  };
  useEffect(() => {
    fetchLogo();
  }, []);

  // ✅ স্লাইডার ডাটা ফেচ
  const fetchSliders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sliders");
      setSliders(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  // favicon and title change
  const fetchSettings = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/settings");
      if (data) {
        setSettings(data);

        // ✅ title apply করা
        if (data.title) {
          document.title = data.title;
        }

        // ✅ favicon apply করা
        if (data.faviconUrl) {
          let link =
            document.querySelector("link[rel~='icon']") ||
            document.createElement("link");
          link.rel = "icon";
          link.href = data.faviconUrl;
          document.head.appendChild(link);
        }
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSignupImage = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/signup-image"
      );
      if (data && data.imageUrl) {
        setSignupImage(data.imageUrl);
        setSignupId(data._id);
      } else {
      }
    } catch (err) {
      console.error("Error fetching signup image:", err);
    }
  };

  useEffect(() => {
    fetchSignupImage();
  }, []);

  const fetchLoginImage = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/login-image");
      if (data && data.imageUrl) {
        setLoginImage(data.imageUrl);
        setLoginImageId(data._id);
      } else {
        setLoginImage(null);
      }
    } catch (error) {
      console.error("Error fetching login image:", error);
    }
  };

  useEffect(() => {
    fetchLoginImage();
  }, []);

  // Fetch Login Image
  const fetchAdminLoginImage = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/admin-login-image"
      );
      if (data && data.loginImageUrl) {
        setAdminLoginImage(data.loginImageUrl);
        setId(data._id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAdminLoginImage();
  }, []);

  useEffect(() => {
    // Navbar settings fetch
    const fetchNavbar = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/navbar");
        setNavbar(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Navbar API error:", error);
      }
    };

    fetchNavbar();
  }, []);

  
// WebMenu settings fetch
  useEffect(() => {
    
    const fetchWebMenu = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/webmenu");
        setWebMenu(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Navbar API error:", error);
      }
    };

    fetchWebMenu();
  }, []);


  // While loading, don’t render children to prevent flicker
  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        logo,
        setLogo,
        fetchLogo,
        id,
        setId,
        sliders,
        signupId,
        signupImage,
        setSignupId,
        fetchSignupImage,
        fetchLoginImage,
        setLoginImage,
        setLoginImageId,
        loginImage,
        loginImageId,
        AdminLoginImage,
        navbar,
        webMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
