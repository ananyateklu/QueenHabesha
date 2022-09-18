using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Appointments
{
    public class List
    {
        public class Query : IRequest<List<Appointment>> { }

        public class Handler : IRequestHandler<Query, List<Appointment>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Appointment>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Appointments.ToListAsync();
            }
        }
    }
}