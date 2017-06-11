using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT4.Models
{
    public class Order
    {
        public long Id { get; set; }
        public DateTime Date { get; set; }
        public bool Delivered { get; set; }
        public double Price { get; set; }

        public long UserId { get; set; }



        public virtual User User { get; set; }
        public virtual ICollection<Game> Games { get; set; }


        public Order()
        {
            Games = new List<Game>();
        }
    }
}