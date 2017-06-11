using NWT4.DAL;
using NWT4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NWT4.Controllers
{
    public class CommentsController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public CommentsController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        // GET: api/Comments/GetNum/5
        [HttpGet]
        [Route("~/api/comments/getnum/{num:int}")]
        public IEnumerable<Comment> GetNum(int num)
        {
            return _unitOfWork.CommentRepository.GetNumDate(num, c => c.Date);
        }

        // GET: api/Comments
        public IEnumerable<Comment> Get()
        {
            return this._unitOfWork.CommentRepository.GetAll();
        }

        // GET: api/Comments/5
        public Comment Get(int id)
        {
            return this._unitOfWork.CommentRepository.Find(c => c.Id == id).FirstOrDefault();//?
        }

        //api/Games/5/comments
        [Route("~/api/games/{gameId:int}/comments")]
        public IEnumerable<Comment> GetCommentsForGame(int gameId)
        {
            return this._unitOfWork.CommentRepository.Find(c => c.Game.Id == gameId).ToList();
        }

        // POST: api/Comments
        public string Post([FromBody]Comment value)
        {
            string msg;
            try
            {
                value.Date = DateTime.Now;
                _unitOfWork.CommentRepository.Insert(value);
                //unitOfWork.GameRepository.GetById(GameId).GameComments.Add(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // PUT: api/Comments/5
        public string Put(int id, [FromBody]Comment value)
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.CommentRepository.Update(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // DELETE: api/Comments/5
        public string Delete(int id)
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.CommentRepository.Delete(id);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
