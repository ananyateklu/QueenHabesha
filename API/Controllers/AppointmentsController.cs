using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistance;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AppointmentsController : BaseApiController
    {
        private readonly DataContext _context;
        public AppointmentsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Appointment>>> GetAppointments() 
        {
            return await _context.Appointments.ToListAsync();
        }

        [HttpGet("{id}")] // Appointment Id
        public async Task<ActionResult<Appointment>> GetAppointment(Guid id)
        {
            return await _context.Appointments.FindAsync(id);
        }
    }
}