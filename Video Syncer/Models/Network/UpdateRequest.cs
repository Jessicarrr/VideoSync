﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Video_Syncer.Models.Network
{
    public class UpdateRequest
    {
        public string roomId { get; set; }
        public int userId { get; set; }
        public double videoTimeSeconds { get; set; }
        public int videoState { get; set; }
        public string currentYoutubeVideoId { get; set; }

    }

    public class UpdateRequestCallback
    {
        public string name { get; set; }

        public string currentYoutubeVideoId { get; set; }
        public List<string> youtubePlaylist { get; set; }
        public VideoState currentVideoState { get; set; }
        public double videoTimeSeconds { get; set; }

        public List<User> userList { get; set; }

    }
}