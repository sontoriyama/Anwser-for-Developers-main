export const langTraductor = (text, from, target) => {
  const TRANSLATE_API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY
  const TRANSLATE_API_URL = import.meta.env.VITE_TRANSLATE_API_URL
  const encodedParams = new URLSearchParams()
  encodedParams.append('source_language', from)
  encodedParams.append('target_language', target)
  encodedParams.append('text', text)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': TRANSLATE_API_KEY,
      'X-RapidAPI-Host': TRANSLATE_API_URL,
    },
    body: encodedParams,
  }

  const traduction = fetch(`https://${TRANSLATE_API_URL}/translate`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))
  return traduction
}
