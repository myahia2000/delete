
function YoutubeTableResize() {
    var iframe = document.getElementById("youtubeTable");
    iframe.onload = function () {
        var rsstableElem = document.getElementById("youtubeTable");
        if (rsstableElem != null) {
            try {
                var iDoc = rsstableElem.contentWindow.document;
                if (iDoc != null) {
                    var ifrH = iDoc.body.offsetHeight;
                    ifrH += 20;
                    if (ifrH < 380) {
                        ifrH = 380;
                    }
                    rsstableElem.style.height = ifrH + "px";
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        if (this.contentWindow) {
            if (this.contentWindow.document.getElementById('videoItems')) {
                document.getElementById('playlistId').value = '';
                document.getElementById('channelId').value = '';
            }
            else if (this.contentWindow.document.getElementById('channel_item')) {
                if (this.contentWindow.document.getElementById('channel_item').getAttribute('data-channel-id')) {
                    document.getElementById('channelId').value = this.contentWindow.document.getElementById('channel_item').getAttribute('data-channel-id');
                    document.getElementById('playlistId').value = '';
                }
            }
            else if (this.contentWindow.document.getElementById('playlist_item')) {
                if (this.contentWindow.document.getElementById('playlist_item').getAttribute('data-playlist-id')) {
                    document.getElementById('playlistId').value = this.contentWindow.document.getElementById('playlist_item').getAttribute('data-playlist-id');
                    document.getElementById('channelId').value = '';
                }
            }
        }
    };
}