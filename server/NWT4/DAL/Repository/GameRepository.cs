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
    public class GameRepository : Repository<Game>, IGameRepository
    {
        public GameRepository(DbContext context) : base(context)
        {
        }

        public IEnumerable<Game> GetNumLongByConsole(int num, Expression<Func<Game, long>>
                                                        predicate, string console)
        {
            if (console != "All")
            {
                return dbSet.Where(g => g.Console == console).OrderByDescending(predicate).ToList().
                Skip(num - 5).Take(5);
            }
            else
            {
                return dbSet.OrderByDescending(predicate).ToList().
                Skip(num - 5).Take(5);
            }

        }


    }
}
