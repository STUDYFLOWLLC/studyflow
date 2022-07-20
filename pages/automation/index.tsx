import classNames from 'classnames'
import Script from 'next/script'
import { useState } from 'react'

export default function index() {
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC = process.env.NEXT_PUBLIC_DISCOVERY_DOCS

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  const SCOPES = process.env.NEXT_PUBLIC_SCOPES

  let tokenClient
  let gapiInited = false
  let gisInited = false

  const [showAuthButton, setShowAuthButton] = useState(true)
  const [showSignOutButton, setShowSignOutButton] = useState(true)

  /**
   * Callback after api.js is loaded.
   */
  function gapiLoaded() {
    gapi.load('client', intializeGapiClient)
  }

  /**
   * Callback after the API client is loaded. Loads the
   * discovery doc to initialize the API.
   */
  async function intializeGapiClient() {
    await window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: [DISCOVERY_DOC],
      scope: SCOPES,
    })
    gapiInited = true
    maybeEnableButtons()
  }

  /**
   * Callback after Google Identity Services are loaded.
   */
  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    })
    gisInited = true
    maybeEnableButtons()
  }

  /**
   * Enables user interaction after all libraries are loaded.
   */
  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      document.getElementById('authorize_button').style.visibility = 'visible'
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick() {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw resp
      }
      document.getElementById('signout_button').style.visibility = 'visible'
      document.getElementById('authorize_button').innerText = 'Refresh'
      await listFiles()
    }

    if (gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' })
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' })
    }
  }

  /**
   *  Sign out the user upon button click.
   */
  function handleSignoutClick() {
    const token = gapi.client.getToken()
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token)
      gapi.client.setToken('')
      document.getElementById('content').innerText = ''
      document.getElementById('authorize_button').innerText = 'Authorize'
      document.getElementById('signout_button').style.visibility = 'hidden'
    }
  }

  /**
   * Print metadata for first 10 files.
   */
  async function listFiles() {
    let response
    try {
      response = await gapi.client.drive.files.list({
        pageSize: 10,
        fields: 'files(id, name)',
      })
    } catch (err) {
      document.getElementById('content').innerText = err.message
      return
    }
    const { files } = response.result
    if (!files || files.length == 0) {
      document.getElementById('content').innerText = 'No files found.'
      return
    }
    // Flatten to string to display
    const output = files.reduce(
      (str, file) => `${str}${file.name} (${file.id}\n`,
      'Files:\n',
    )
    document.getElementById('content').innerText = output
  }

  console.log(tokenClient)

  return (
    <>
      <Script
        async
        defer
        src="https://apis.google.com/js/api.js"
        onLoad={() => gapiLoaded()}
      />
      <Script
        async
        defer
        src="https://accounts.google.com/gsi/client"
        onLoad={() => gisLoaded()}
      />
      <div>
        <p>Drive API Quickstart</p>
        <button
          type="button"
          onClick={() => {
            console.log(gapi.client.getToken())
            const authInstance = window.gapi.auth2.getAuthInstance()
            console.log(gapi)
            authInstance.grantOfflineAccess().then((res) => {
              console.log(res)
              this.data.refreshToken = res.code
            })
          }}
        >
          test
        </button>
        <button
          type="button"
          id="authorize_button"
          className={classNames(
            { hidden: !showAuthButton },
            { block: showAuthButton },
          )}
          onClick={() => handleAuthClick()}
        >
          Authorize
        </button>
        <button
          type="button"
          id="signout_button"
          onClick={() => handleSignoutClick()}
        >
          Sign Out
        </button>
        <pre id="content" style={{ whiteSpace: 'pre-wrap' }} />
      </div>
    </>
  )
}
