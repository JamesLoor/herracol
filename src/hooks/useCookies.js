import { useEffect } from "react"
import { useState } from "react"

const useCookies = () => {
  const [consentCookie, setConsentCookies] = useState(
    () => window.localStorage.getItem("cookies-consent")
  )

  useEffect(() => {
    console.log('cosentCookie: ' + consentCookie)
  }, [consentCookie])

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