import { axiosInstance } from "@/lib/axios";

export default function login(req, res) {
  try {
    const { email, password } = req.body;
    axiosInstance
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(400 ?? 500).json(error?.response.data);
      });
  } catch (error) {
    res.status(500).json("internal Server Error");
  }
}
