using NWT4.DAL;
using NWT4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NWT4.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UsersController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public UsersController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }


        // POST: api/Users/Login
        [HttpPost]
        [Route("~/api/users/login")]
        public object Login([FromBody]User data)
        {
            try
            {
                User user = _unitOfWork.UserRepository.Find(u => u.Email == data.Email &&
                u.Password == data.Password).First();
                return user;
            }
            catch (Exception e)
            {
                return "Failed";
            }


        }

        // GET: api/Users/GetNum/5
        [HttpGet]
        [Route("~/api/users/getnum/{num:int}")]
        public IEnumerable<User> GetNum(int num)
        {
            return _unitOfWork.UserRepository.GetNumLong(num, u => u.Id);
        }

        // GET: api/Users
        public IEnumerable<User> Get()
        {
            return _unitOfWork.UserRepository.GetAll();
        }

        // GET: api/Users/5
        public User Get(int id)
        {
            return _unitOfWork.UserRepository.GetById(id);
        }

        // POST: api/Users
        public object Post([FromBody]User value)
        {

            try
            {
                User user_check = _unitOfWork.UserRepository.Find(u => u.Email == value.Email).FirstOrDefault();
                if (user_check == null)
                {
                    _unitOfWork.UserRepository.Insert(value);
                    _unitOfWork.Save();
                    User user = _unitOfWork.UserRepository.Find(u => u.Email == value.Email).First();
                    return user;
                }
                else
                {
                    return "Failed";
                }

            }
            catch (Exception e)
            {
                return "Failed";
            }
        }



        // PUT: api/Users/5
        public string Put(int id, [FromBody]User value)
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.UserRepository.Update(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // DELETE: api/Users/5
        public string Delete(int id)
        {
            string msg;
            try
            {

                _unitOfWork.UserRepository.Delete(id);
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
