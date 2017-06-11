using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT4.Models
{
    public class Game
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string FullDescription { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        public string Console { get; set; }
        public string YoutubeLink { get; set; }
        public string WebsiteLink { get; set; }
        public string Developer { get; set; }

        public virtual ICollection<Comment> GameComments { get; set; }

        public virtual ICollection<Order> GameOrders { get; set; }

        public Game()
        {
            GameComments = new List<Comment>();

            GameOrders = new List<Order>();
        } 
    }
}