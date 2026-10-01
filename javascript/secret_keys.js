<script src= mapbox_access_token = 'pk.eyJ1Ijoia2NqNjgiLCJhIjoiY211b2tpbjJiMDRsdjJ4b2N1YTJ1NnVwNSJ9.5rqgfzuhpehv5NLbUJvTfA'>
</script>
<script>
 var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}',
  {maxZoom: 18, id: 'mapbox.mapbox-traffic-v1',
   accessToken: mapbox_access_token}).addTo(mymap);
 </script>
