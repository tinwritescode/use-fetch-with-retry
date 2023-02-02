// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const mockApi = { "country_code": "VN", "country_name": "Vietnam", "city": null, "postal": null, "latitude": 16, "longitude": 106, "IPv4": "116.100.195.126", "state": null }

  // rand 70% success
  const rand = Math.random() * 100;
  const isError = true;

  if (isError) {
    res.status(500).json({ error: 'Internal server error' })
    return;
  }

  setTimeout(() => {
    res.status(200).json(mockApi)
  }, 3000)
}
