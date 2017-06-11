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
    public class GamesController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public GamesController(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        // GET: api/Games/GetNum/5
        [HttpGet]
        [Route("~/api/games/getnum/{num:int},{console:int}")]
        public IEnumerable<Game> GetNum(int num, int console)
        {
            string Console = "All";
            switch (console)
            {
                case 1:
                    Console = "Nintendo Switch";
                    break;
                case 2:
                    Console = "Nintendo Wii U";
                    break;
                case 3:
                    Console = "PS4";
                    break;
                case 4:
                    Console = "PS3";
                    break;
                case 5:
                    Console = "XBox One";
                    break;
                case 6:
                    Console = "XBox 360";
                    break;
            }

            return _unitOfWork.GameRepository.GetNumLongByConsole(num, g => g.Id, Console);
        }

        // GET: api/Games
        public IEnumerable<Game> Get()
        {
            return _unitOfWork.GameRepository.GetAll().ToList();
        }

        // GET: api/Games/5
        public Game Get(int id)
        {
            return _unitOfWork.GameRepository.GetById(id);
        }

        // POST: api/Games
        public string Post([FromBody]Game value)
        {
            string msg;
            try
            {
                _unitOfWork.GameRepository.Insert(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;

        }

        // PUT: api/Games/5
        public string Put(int id, [FromBody]Game value)//proveriti
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.GameRepository.Update(value);
                _unitOfWork.Save();
                msg = "Success";
            }
            catch (Exception e)
            {
                msg = "Failed";
            }
            return msg;
        }

        // DELETE: api/Games/5
        public string Delete(int id)//proveriti
        {
            string msg;
            //value.Id = id;
            try
            {
                _unitOfWork.GameRepository.Delete(id);
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
