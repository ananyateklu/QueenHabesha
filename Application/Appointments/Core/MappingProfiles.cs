using AutoMapper;
using Domain;

namespace Application.Appointments.Core
{
    public class MappingProfiles : Profile
    {
        
        public MappingProfiles()
        {
            CreateMap<Appointment, Appointment>();
        }

    }
}