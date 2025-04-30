import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get('city');
  const lat = req.nextUrl.searchParams.get('lat');
  const lon = req.nextUrl.searchParams.get('lon');

  const apiKey = process.env.OPENWEATHER_API_KEY;  // Server-side only

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing. Please configure it in the environment variables.' }, { status: 500 });
  }

  try {
    let url = '';

    if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
      return NextResponse.json({ error: 'City or coordinates missing' }, { status: 400 });
    }

    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}
