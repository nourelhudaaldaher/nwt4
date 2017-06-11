using NWT4.DAL.IRepository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace NWT4.DAL
{
    public interface IUnitOfWork : IDisposable
    {
        IGameRepository GameRepository { get; }
        ICommentRepository CommentRepository { get; }
        IUserRepository UserRepository { get; }
        IOrderRepository OrderRepository { get; }

        void Save();

        DbContext getDbContext();
    }
}