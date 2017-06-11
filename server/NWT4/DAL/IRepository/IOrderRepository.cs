using NWT4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace NWT4.DAL.IRepository
{
    public interface IOrderRepository : IRepository<Order>
    {
        IEnumerable<Order> GetOrders(int num, Expression<Func<Order, DateTime>> predicate);
        new void Insert(Order order);
    }
}