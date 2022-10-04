using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistance;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Appointments.Any()) return;

            var appointments = new List<Appointment>
            {
                new Appointment
                {
                    Name = "Abeba Debebe",
                    Date = DateTime.Now.AddMonths(-2),
                    Price = 50,
                    Stylist = "H",
                },
                new Appointment
                {
                    Name = "Alitash Ayalu",
                    Date = DateTime.Now.AddMonths(-1),
                    Price = 30,
                    Stylist = "H",
                },
                new Appointment
                {
                    Name = "Ayana Burka",
                    Date = DateTime.Now.AddMonths(0),
                    Price = 50,
                    Stylist = "M",
                },
                new Appointment
                {
                    Name = "Dinkinesh Alemu",
                    Date = DateTime.Now.AddMonths(1),
                    Price = 80,
                    Stylist = "H",
                },
                new Appointment
                {
                    Name = "Bemnet Yelma",
                    Date = DateTime.Now.AddMonths(2),
                    Price = 100,
                    Stylist = "H",
                },
                new Appointment
                {
                    Name = "Fikir Alula",
                    Date = DateTime.Now.AddMonths(3),
                    Price = 60,
                    Stylist = "M",
                },
                new Appointment
                {
                   Name = "Dessie Ayele",
                    Date = DateTime.Now.AddMonths(6),
                    Price = 50,
                    Stylist = "M",
                },
                new Appointment
                {
                    Name = "Feven Dawit",
                    Date = DateTime.Now.AddMonths(5),
                    Price = 70,
                    Stylist = "H",
                },
                new Appointment
                {
                    Name = "Helina Haile",
                    Date = DateTime.Now.AddMonths(5),
                    Price = 70,
                    Stylist = "M",
                },
                new Appointment
                {
                    Name = "Dimber Sena",
                    Date = DateTime.Now.AddMonths(1),
                    Price = 40,
                    Stylist = "H",
                }
            };

            if (context.Users.Any()) return;

            var users = new List<User>
            {
                new User
                {
                    Name = "Helen Hailu",
                    IsStylist = true,
                },
                 new User
                {
                    Name = "Dimber Sena",
                    IsStylist = false,
                },
                new User
                {
                    Name = "Mekdes Hailu",
                    IsStylist = true,
                },
                 new User
                {
                    Name = "Abeba Debebe",
                    IsStylist = false,
                },
                 new User
                {
                    Name = "Alitash Ayalu",
                    IsStylist = false,
                },
                new User
                {
                    Name = "Ayana Burka",
                    IsStylist = false,
                },
                 new User
                {
                    Name = "Dinkinesh Alemu",
                    IsStylist = false,
                }
            };

            await context.Appointments.AddRangeAsync(appointments);
            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
        }
    }
}