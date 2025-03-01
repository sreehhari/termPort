import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import json
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID =os.getenv('CLIENT_ID')
CLIENT_SECRET=os.getenv('CLIENT_SECRET')
REDIRECT_URL=os.getenv('REDIRECT_URL')

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET,
    redirect_uri=REDIRECT_URL,
    scope="user-read-recently-played"
))

#TO GET THE LAST SONG THAT PLAYED
recent_tracks = sp.current_user_recently_played(limit=1)
if recent_tracks["items"]:
    last_track = recent_tracks["items"][0]["track"]
    output = {
        "name":last_track["name"],
        "artists":[artist["name"] for artist in last_track["artists"]],
    }
    print(json.dumps(output))
else:
       print(json.dumps({"error": "No recently played tracks found"}))
