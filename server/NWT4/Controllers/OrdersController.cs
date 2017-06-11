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
    public class OrdersController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public OrdersController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        // GET: api/Orders/GetNum/5
        [HttpGet]
        [Route("~/api/orders/getnum/{num:int}")]
        public IEnumerable<Order> GetNum(int num)
        {
            return _unitOfWork.OrderRepository.GetOrders(num, o => o.Date);
        }

        // GET: api/Orders
        public IEnumerable<Order> Get()
        {
            return _unitOfWork.OrderRepository.GetAll().ToList();
        }

        // GET: api/Orders/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Orders
        public string Post([FromBody]Order value)
        {
            string msg;
            value.Date = DateTime.Now;
            value.Price = 0;
            foreach (Game game in value.Games)
            {
                value.Price += game.Price;
            }
            try
            {
                _unitOfWork.OrderRepository.Insert(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // PUT: api/Orders/5
        public string Put(int id, [FromBody]Order value)
        {
            string msg;
            //value.Id = id;
            try
            {
                value.Games = null;
                value.User = null;
                _unitOfWork.OrderRepository.Update(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // DELETE: api/Orders/5
        public string Delete(int id)
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.OrderRepository.Delete(id);
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
