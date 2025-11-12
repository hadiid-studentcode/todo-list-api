import * as authService from "./auth.service.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const { user, token } = await authService.registerUser(
      email,
      name,
      password
    );

    return res.status(201).json({
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const { user, token } = await authService.loginUser(email, password);
    res.status(200).json({
    
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
