/**
 * services/api.js
 * Central API service layer — all backend calls live here.
 * Swap BASE_URL to your deployed backend when going live.
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/* ── Generic fetch wrapper ──────────────────────────────────────────────── */
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/* ── Portfolio Data ─────────────────────────────────────────────────────── */
export const portfolioApi = {
  /** GET /api/profile */
  getProfile: () => request('/profile'),

  /** GET /api/skills */
  getSkills: () => request('/skills'),

  /** GET /api/projects */
  getProjects: () => request('/projects'),

  /** GET /api/education */
  getEducation: () => request('/education'),

  /** GET /api/experience */
  getExperience: () => request('/experience'),

  /** GET /api/certifications */
  getCertifications: () => request('/certifications'),

  /** GET /api/interests */
  getInterests: () => request('/interests'),

  /**
   * POST /api/contact
   * @param {{ name: string, email: string, message: string }} payload
   */
  sendContact: (payload) =>
    request('/sendmail', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  /** Fetch everything in parallel — returns settled results safely */
  fetchAll: async () => {
    const [
      profile,
      skills,
      projects,
      education,
      experience,
      certifications,
      interests,
    ] = await Promise.allSettled([
      portfolioApi.getProfile(),
      portfolioApi.getSkills(),
      portfolioApi.getProjects(),
      portfolioApi.getEducation(),
      portfolioApi.getExperience(),
      portfolioApi.getCertifications(),
      portfolioApi.getInterests(),
    ]);

    const resolve = (result, fallback) =>
      result.status === 'fulfilled' ? result.value : fallback;

    return {
      profile:        resolve(profile,        null),
      skills:         resolve(skills,         null),
      projects:       resolve(projects,       []),
      education:      resolve(education,      []),
      experience:     resolve(experience,     []),
      certifications: resolve(certifications, []),
      interests:      resolve(interests,      []),
    };
  },
};

export default portfolioApi;