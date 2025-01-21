import { SpotifyWebApi } from '@spotify/web-api-ts-sdk';
 

export default async function music(req,res){
  const {SPOTIFY_CLINET_ID,SPOTIFY_CLIENT_SECRET,SPOTIFY_REDIRECT}=process.env;
  try{
    const sdk = SpotifyWebApi.withUserAuthorization(SPOTIFY_CLIENT_ID,SPOTIFY_REDIRECT ,['user-read-playback-state', 'user-library-read']);
    const user  = await sdk.currentUser.profile();
    const recentlyPlayed = await sdk.player.recentlyPlayed();
    const lastTrack = recentlyPlayed.items[0]?.track;
    if(lastTrack){
      res.status(200).json({
        name:lastTrack.name,
        artist:lastTrack.artist.map(artist=>artist.name).join(','),
      });
      
    }
    else{
      res.status(404).json({
        error:'no recently played track found'
      });
    }

  }
  catch(error){
    console.error("error fetching the last track:",error);
    res.status(500).json({
      error:'error fetching track'
    });
  }
}


