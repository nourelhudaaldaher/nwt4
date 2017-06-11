using NWT4.DAL.IRepository;
using NWT4.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace NWT4.DAL.Repository
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(DbContext context) : base(context)
        {

        }

        public IEnumerable<Order> GetOrders(int num, Expression<Func<Order, DateTime>> predicate)
        {
            return this.dbSet
                .OrderByDescending(order => order.Date)
                .OrderByDescending(predicate)
                .Include(order => order.Games)
                .Include(order => order.User)
                .ToList()
                .Skip(num - 5)
                .Take(5);
        }

        public new void Insert(Order order)
        {
            foreach (Game g in order.Games)
            {
                this.context.Set<Game>().Attach(g);
            }
            dbSet.Add(order);
        }
    }
}