using NWT4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace NWT4.DAL.IRepository
{
    public interface IGameRepository : IRepository<Game>
    {
        IEnumerable<Game> GetNumLongByConsole(int num, Expression<Func<Game, long>> predicate, string console);
    }
}