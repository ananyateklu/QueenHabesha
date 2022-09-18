namespace Domain
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public DateTime Date { get; set; }
        public int Price { get; set; }
        public string? Stylist { get; set; }
    }
}