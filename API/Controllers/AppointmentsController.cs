using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistance;
using Microsoft.EntityFrameworkCore;
using Application.Appointments;

namespace API.Controllers
{
    public class AppointmentsController : BaseApiController
    {
    

        [HttpGet]
        public async Task<ActionResult<List<Appointment>>> GetAppointments()
        {
            return await Mediator.Send(new Application.Appointments.List.Query());
        }

        [HttpGet("{id}")] // Appointment Id
        public async Task<ActionResult<Appointment>> GetAppointment(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Appointment>> CreateAppointment(Appointment appointment)
        {
            return Ok(await Mediator.Send(new Create.Command {Appointment = appointment}));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditAppointment(Guid id, Appointment appointment)
        {
            appointment.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Appointment = appointment}));
        }
    }
}