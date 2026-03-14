import { useContactForm } from '../hooks';

export default function Contact({ profile }) {
  const { form, update, submit, status, errMsg, reset } = useContactForm();

  return (
    <section id="contact" className="section">
      <div className="contact-grid">

        {/* ── Left: info ── */}
        <div>
          <div className="section-label reveal"># Contact</div>
          <h2 className="contact-heading reveal d1">
            Let's Work<br />
            <span>Together</span>
          </h2>
          <p className="contact-sub reveal d2">
            Ready to bring your vision to life? Drop a message and let's build something remarkable together.
          </p>

          <div className="contact-info reveal d3">
            {profile?.location && (
              <div className="c-info-item">
                <small>Location</small>
                <span>{profile.location}</span>
              </div>
            )}
            {profile?.phone && (
              <div className="c-info-item">
                <small>Phone</small>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            )}
            {profile?.email && (
              <div className="c-info-item">
                <small>Email</small>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            )}
            {/* // {(profile?.contact || []).map((c, i) => (
            //   <div key={i} className="c-info-item">
            //     <small>{c.name}</small>
            //     <span>{c.link}</span>
            //   </div>
            ))} */}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="reveal d2">
          {status === 'success' ? (
            <div className="sent-state">
              <div className="sent-num">Sent!</div>
              <p className="sent-msg">Thanks for reaching out. I'll get back to you soon.</p>
              <button className="btn btn-outline" onClick={reset}>Send Another</button>
            </div>
          ) : (
            <>
              <p className="c-form-label">
                Let's grab a coffee and jump on a<br />
                conversation. <em>Chat with me.</em>
              </p>

              <form className="cform" onSubmit={submit}>
                <div className="cform-row">
                  <input
                    className="cfield"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                  <input
                    className="cfield"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                </div>
                <textarea
                  className="cfield"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={update('message')}
                  required
                />

                {status === 'error' && (
                  <p className="cform-err">{errMsg}</p>
                )}

                <div className="cform-actions">
                  <button
                    type="submit"
                    className="btn btn-accent"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Contact Me →'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}