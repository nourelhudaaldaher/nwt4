using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT4.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public int Score { get; set; }
        public DateTime Date { get; set; }

        public virtual Game Game { get; set; }
        public long GameId { get; set; }

        public Comment()
        {

        }
    }
}