using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        [Required] 
        public string? BuildingNumber { get; set; }
        [Required] 
        public int FloorNumber { get; set; }
        public int FacultyId { get; set; }
        public string? HeadOfDepartmentId { get; set; }

        // Navigation Properties
        public Faculty? Faculty { get; set; } 
        public User? HeadOfDepartment { get; set; } // One-to-One 
    }
}