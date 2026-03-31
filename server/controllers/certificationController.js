import Certification from '../models/Certification.js';

// @desc    Get all certifications
// @route   GET /user/certifications
export const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find().sort({ createdAt: -1 });
    res.json(certs);
  } catch (err) {
    console.error('getCertifications error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create certification
// @route   POST /user/certifications
export const createCertification = async (req, res) => {
  try {
    const cert = new Certification(req.body);
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    console.error('createCertification error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update certification
// @route   PUT /user/certifications/:id
export const updateCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cert) return res.status(404).json({ message: 'Not found' });
    res.json(cert);
  } catch (err) {
    console.error('updateCertification error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete certification
// @route   DELETE /user/certifications/:id
export const deleteCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndDelete(req.params.id);
    if (!cert) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('deleteCertification error:', err.message);
    res.status(500).json({ message: err.message });
  }
};