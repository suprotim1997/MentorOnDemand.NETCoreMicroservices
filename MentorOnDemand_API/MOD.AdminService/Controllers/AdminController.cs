using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.AdminLibrary.Repository;
using MOD.DtosLibrary;
using MOD.ModelLibrary;

namespace MOD.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AdminController : ControllerBase
    {
        IAdminRepository adminRepository;
        public AdminController(IAdminRepository adminRepository)
        {
            this.adminRepository = adminRepository;
        }
        // GET: api/Admin
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Admin/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [HttpPost("skill")]
        public IActionResult Post([FromBody] Skill skill)
        {
            if (ModelState.IsValid)
            {
                bool result = adminRepository.AddSkill(skill);
                return Created("AddSkill", skill);
            }
            return BadRequest(ModelState);
        }

       




        [HttpGet("getSkills")]
        public IActionResult GetSkills()
        {
            return Ok(adminRepository.GetSkills());
        }
        [HttpGet("getTrainings")]
        public IActionResult GetTrainings()
        {
            return Ok(adminRepository.GetTrainings());
        }

        [HttpGet("GetUsers")]
        public IActionResult GetUsers()
        {
            return Ok(adminRepository.GetUsers());
        }

        [HttpGet("GetPayments")]
        public IActionResult GetPayments()
        {
            return Ok(adminRepository.GetPayments());
        }


        [HttpGet("{id}")]
        public IActionResult GetUser(string id)
        {
            var User = adminRepository.GetUser(id);
            if (User == null)
            {
                return NotFound();
            }
            return Ok(User);
        }



        [HttpGet("GetPaymentById/{id}")]
        public IActionResult GetPaymentById(int id)
        {
            return Ok(adminRepository.GetPaymentById(id));
        }


        [HttpGet("GetSkill/{id:int}", Name = "GetSkill")]
        public IActionResult Get(int id)
        {
            var skill = adminRepository.GetSkill(id);
            if (skill == null)
            {
                return NotFound();
            }
            return Ok(skill);
        }




        [HttpDelete("DeleteSkill/{id}", Name = "DeleteSkill")]
        public IActionResult Delete(int id)
        {
            var skill = adminRepository.GetSkill(id);
            if (skill == null)
            {
                return NotFound();
            }
            bool result = adminRepository.DeleteSkill(skill);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpGet("blockunblock/{id}")]
        public IActionResult GetBlockUnblock(string id)
        {
            var result = adminRepository.BlockUser(id);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }


        [HttpPut("updatePaymentAndCommisionById/{id}")]
        public IActionResult PutupdatePaymentAndCommisionById(string id, [FromBody] PaymentDto payment)
        {
            adminRepository.PutupdatePaymentAndCommisionById(id, payment);
            return Ok();
        }

        [HttpGet("GetTrainingById/{id}")]
        public IActionResult GetTrainingById(int id)
        {
            return Ok(adminRepository.GetTrainingById(id));
        }








        //[HttpPut("{id}")]
        //public IActionResult Put(int id, [FromBody] UserProfileDto user)
        //{
        //    if (ModelState.IsValid && id == user.Id)
        //    {
        //        bool result = adminRepository.UpdateActor(user);
        //        if (result)
        //        {
        //            return Ok();
        //        }
        //        return StatusCode(StatusCodes.Status500InternalServerError);
        //    }
        //    return BadRequest(ModelState);
        //}

        // POST: api/Admin
        //[HttpPost]
        //public IActionResult Post([FromBody] CourseDto courseDto)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        bool result = adminRepository.AddCourse(courseDto);
        //        return Created("AddCourse", courseDto);
        //    }
        //    return BadRequest(ModelState);
        //}

        // PUT: api/Admin/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

    }
}