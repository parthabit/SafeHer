exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Gemini API key not configured on server.' })
    };
  }

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body.' }) }; }

  const { history } = body;
  if (!history || !Array.isArray(history)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing history array.' }) };
  }

  const systemInstruction = 'You are SafeHer AI, a compassionate 24/7 women safety assistant. Provide emotional support, practical safety advice, and emergency guidance. Be warm, concise, and empathetic. If someone is in danger, always tell them to call 112 first. Keep responses under 3 sentences.';

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: history
        })
      }
    );
    const data = await res.json();
    if (data.error) {
      return { statusCode: 502, body: JSON.stringify({ error: data.error.message }) };
    }
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here with you. Call 112 if you need immediate help.";
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };
  } catch (e) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Failed to reach Gemini API.' })
    };
  }
};

