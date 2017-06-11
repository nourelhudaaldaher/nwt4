using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using NWT4.DAL.IRepository;
using NWT4.DAL.Repository;

namespace NWT4.DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private DbContext _context;

        private readonly IGameRepository _gameRepository;
        private readonly ICommentRepository _commentRepository;
        private readonly IUserRepository _userRepository;
        private readonly IOrderRepository _orderRepository;

        public UnitOfWork(DbContext appDbContext, IGameRepository gameRepository, ICommentRepository commentRepository,
            IUserRepository userRepository, IOrderRepository orderRepository)
        {
            this._context = appDbContext;

            this._gameRepository = gameRepository;
            this._commentRepository = commentRepository;
            this._userRepository = userRepository;
            this._orderRepository = orderRepository;
        }

        public IGameRepository GameRepository
        {
            get
            {
                return _gameRepository;
            }
        }

        public ICommentRepository CommentRepository
        {
            get
            {
                return _commentRepository;
            }
        }

        public IUserRepository UserRepository
        {
            get
            {
                return _userRepository;
            }
        }

        public IOrderRepository OrderRepository
        {
            get
            {
                return _orderRepository;
            }
        }



        public void Save()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;



        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public DbContext getDbContext()
        {
            return _context;
        }
    }
}