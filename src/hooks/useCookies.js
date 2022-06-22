import { useState } from "react"

const useCookies = () => {
  const [consentCookie, setConsentCookies] = useState(
    () => window.localStorage.getItem("cookies-consent")
  )

  const acceptConsentCookies = () => {
    setConsentCookies(true)
    window.localStorage.setItem("cookies-consent", true)
  }

  return {
    consentCookie,
    acceptConsentCookies
  }
}

export default useCookies