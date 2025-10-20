// /src/components/Github/Github.jsx
  // React Router Data API component + loader
  // Route usage in main.jsx:
  // <Route path="github" loader={githubInfoLoader} element={<Github />} errorElement={<GithubError />} />

  import React from 'react';
  import {
    useLoaderData,
    useRouteError,
    isRouteErrorResponse,
    Link,
    Form,
  } from 'react-router-dom';

  /**
   * Loader for the /github route.
   * - Reads ?user=<github-username> from the query string, defaults to "MdSaifAli063".
   * - Fetches public profile data from the GitHub API.
   */
  export async function githubInfoLoader({ request }) {
    const url = new URL(request.url);
    const username = url.searchParams.get('user') || 'MdSaifAli063';

    try {
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        }
      );

      if (!res.ok) {
        const message = `Failed to fetch GitHub user "${username}"`;
        // Throw a Response so React Router can render errorElement
        throw new Response(message, { status: res.status, statusText: res.statusText });
      }

      const data = await res.json();
      return data;
    } catch (err) {
      // Network errors or other unexpected failures
      const message =
        err instanceof Error ? err.message : 'Network error while fetching GitHub user';
      throw new Response(message, { status: 500 });
    }
  }

  /**
   * Github component that consumes data from githubInfoLoader via useLoaderData.
   */
  export default function Github() {
    const user = useLoaderData();

    return (
      <div style={{ maxWidth: 720, margin: '2rem auto', padding: '1rem' }}>
        <h1>GitHub Profile</h1>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <img
            src={user.avatar_url}
            alt={`${user.login || 'user'} avatar`}
            width={96}
            height={96}
            style={{ borderRadius: '50%' }}
          />
          <div>
            <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
            <p style={{ margin: '0.25rem 0', color: '#555' }}>@{user.login}</p>
            {user.bio && <p style={{ margin: '0.25rem 0' }}>{user.bio}</p>}
            <p style={{ margin: '0.25rem 0' }}>
              Followers: {user.followers} • Following: {user.following} • Repos: {user.public_repos}
            </p>
            <p style={{ margin: '0.25rem 0' }}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </p>
          </div>
        </div>

        <hr style={{ margin: '1.5rem 0' }} />

        {/* Small search to load any username */}
        <Form method="get" replace style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            name="user"
            placeholder="GitHub username"
            defaultValue={user.login}
            style={{ padding: '0.5rem', marginRight: '0.5rem' }}
            aria-label="GitHub username"
          />
          <button type="submit">Load</button>
        </Form>

        <div>
          <p>Quick links:</p>
          <ul>
            <li>
              <Link to="/github?user=MdSaifAli063">/github?user=MdSaifAli063</Link>
            </li>
            <li>
              <Link to="/github?user=octocat">/github?user=octocat</Link>
            </li>
            <li>
              <Link to="/github?user=torvalds">/github?user=torvalds</Link>
            </li>
            <li>
              <Link to="/github?user=gaearon">/github?user=gaearon</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  /**
   * Route error element for the /github route.
   * Shows human-friendly messages for loader errors.
   */
  export function GithubError() {
    const error = useRouteError();

    let title = 'Something went wrong';
    let details = 'An unexpected error occurred.';
    let statusDisplay = '';

    if (isRouteErrorResponse(error)) {
      statusDisplay = `Error ${error.status}`;
      details = typeof error.data === 'string' ? error.data : error.statusText || details;
    } else if (error instanceof Error) {
      details = error.message;
    }

    return (
      <div style={{ maxWidth: 720, margin: '2rem auto', padding: '1rem' }}>
        <h1>GitHub Profile</h1>

        <div
          role="alert"
          style={{
            background: '#fdecea',
            border: '1px solid #f5c6cb',
            color: '#a94442',
            padding: '1rem',
            borderRadius: 6,
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>
            {statusDisplay || title}
          </p>
          <p style={{ margin: '0.5rem 0 0' }}>{details}</p>
        </div>

        <hr style={{ margin: '1.5rem 0' }} />

        <div>
          <p>Try a valid user via query string:</p>
          <ul>
            <li>
              <Link to="/github?user=MdSaifAli063">/github?user=MdSaifAli063</Link>
            </li>
            <li>
              <Link to="/github?user=octocat">/github?user=octocat</Link>
            </li>
            <li>
              <Link to="/github?user=torvalds">/github?user=torvalds</Link>
            </li>
            <li>
              <Link to="/github?user=gaearon">/github?user=gaearon</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }