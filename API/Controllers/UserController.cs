using Application.Users;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await Mediator.Send(new Application.Users.List.Query());
        }


        [HttpGet("{id}")] // Appointment Id
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}