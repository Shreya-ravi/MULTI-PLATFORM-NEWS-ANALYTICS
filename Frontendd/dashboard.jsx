import React from 'react';

export default function UrlShortenerDashboard() {
  const data = [
    {
      shortUrl: 'r5fkh5s',
      originalUrl: 'https://www.udayavani.com/news-section/national-news/wh[...]',
      date: '20-May-2025 11:03',
      ip: '172.25.25.49',
      clicks: 15,
      username: 'prajwal.shanbhag',
    },
  ];

  const handleLogout = () => alert('Logout clicked');
  const handleChangePassword = () => alert('Change password clicked');
  const handleHelpClick = () => alert('Help clicked');
  const handlePluginClick = (pluginName) => alert(`${pluginName} clicked`);

  return (
    <div
      className="container mt-3"
      style={{
        maxWidth: '1100px',
        fontSize: '0.9rem',
        lineHeight: '1.4',
      }}
    >
      <div className="card shadow-sm p-3">
        <div className="d-flex justify-content-end mb-2">
          <div className="text-end">
            <h4 className="text-primary mb-0" style={{ fontSize: '1.25rem' }}>YOURLS: Your Own URL Shortener</h4>
            <div className="fw-semibold" style={{ fontSize: '1rem' }}>ಉದಯವಾಣಿ</div>
          </div>
        </div>

        <p className="mb-1">
          Hello <strong>udayavani</strong> (
          <button
            onClick={handleLogout}
            className="btn btn-link p-0"
            style={{ fontSize: '0.9rem' }}
          >
            Logout
          </button>
          ) |{' '}
          <button
            onClick={handleChangePassword}
            className="btn btn-link p-0"
            style={{ fontSize: '0.9rem' }}
          >
            Change password
          </button>
        </p>

        <p className="fw-bold mb-1 mt-2" style={{ fontSize: '0.95rem' }}>Admin Interface</p>
        <p className="fw-bold mb-1">Tools:</p>
        <p className="fw-bold mb-1">Manage Plugins</p>

        <ul className="ms-3 mb-2">
          {['Change Password', 'Fallback URL Plugin Config', 'Random ShortURLs Settings', 'Time Zone Configuration'].map((plugin) => (
            <li key={plugin}>
              <button
                onClick={() => handlePluginClick(plugin)}
                className="btn btn-link p-0 text-primary"
                style={{ fontSize: '0.9rem' }}
              >
                {plugin}
              </button>
            </li>
          ))}
        </ul>

        <div className="ms-3 mb-3">
          <button
            onClick={handleHelpClick}
            className="btn btn-link p-0 text-primary"
            style={{ fontSize: '0.9rem' }}
          >
            Help
          </button>
        </div>

        <p className="mb-1" style={{ fontSize: '0.9rem' }}>
          Display <strong>1 to 15</strong> of <strong>[Total URLs from backend]</strong>.
        </p>
        <p className="mb-3" style={{ fontSize: '0.9rem' }}>
          Overall, tracking <strong>[Total URLs]</strong> links, <strong>[Total Clicks]</strong> clicks!
        </p>

        <div className="p-2 mb-3 rounded" style={{ backgroundColor: '#e6f2ff' }}>
          <div className="row g-2 align-items-center">
            <div className="col-md-3 fw-bold" style={{ fontSize: '0.9rem' }}>Enter the URL:</div>
            <div className="col-md-4">
              <input type="text" className="form-control form-control-sm" placeholder="https://" />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control form-control-sm" placeholder="Optional: Custom short URL" />
            </div>
            <div className="col-md-2">
              <button className="btn btn-sm btn-primary w-100">Shorten URL</button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover table-sm">
            <thead className="table-primary text-center align-middle">
              <tr>
                <th colSpan="4">Short URL</th>
                <th rowSpan="2">Original URL</th>
                <th rowSpan="2">Date</th>
                <th rowSpan="2">IP</th>
                <th rowSpan="2">Clicks</th>
                <th rowSpan="2">Username</th>
                <th rowSpan="2">Actions</th>
              </tr>
              <tr>
                <th>Facebook</th>
                <th>Twitter</th>
                <th>Telegram</th>
                <th>Whatsapp</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.shortUrl}>
                  {['facebook', 'twitter', 'telegram', 'whatsapp'].map((platform) => (
                    <td key={platform}>
                      <a
                        href={`/${row.shortUrl}?platform=${platform}`}
                        className="text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.shortUrl}
                      </a>
                    </td>
                  ))}
                  <td className="text-truncate" style={{ maxWidth: '200px' }} title={row.originalUrl}>
                    <a href={row.originalUrl} target="_blank" rel="noopener noreferrer">{row.originalUrl}</a>
                  </td>
                  <td>{row.date}</td>
                  <td>{row.ip}</td>
                  <td>{row.clicks}</td>
                  <td>{row.username}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-1" title="View stats">📊</button>
                    <button className="btn btn-sm btn-outline-secondary me-1" title="Edit">✏️</button>
                    <button className="btn btn-sm btn-outline-danger" title="Delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
);
}
