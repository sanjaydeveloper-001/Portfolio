export const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const base64 = req.file.buffer.toString("base64");

    const imageUrl = `data:${req.file.mimetype};base64,${base64}`;

    res.json({ url: imageUrl });

  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: err.message });
  }
};