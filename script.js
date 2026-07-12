const channelId = "UCFN8vklTYO9E6r3feOJ43Ow";

const videos = document.getElementById("videos");

videos.innerHTML = `
<iframe
width="100%"
height="315"
src="https://www.youtube.com/embed?listType=uploads&list=${channelId}"
title="Latest Videos"
frameborder="0"
allowfullscreen>
</iframe>

<br><br>

<a href="https://youtube.com/@mr.dayanand" target="_blank"
style="
display:inline-block;
padding:12px 24px;
background:#ff0000;
color:#fff;
text-decoration:none;
border-radius:8px;
font-weight:bold;">
🎵 View All Songs
</a>
`;
