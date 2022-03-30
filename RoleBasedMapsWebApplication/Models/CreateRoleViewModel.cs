﻿using System.ComponentModel.DataAnnotations;

namespace RoleBasedMapsWebApplication.Models
{
    public class CreateRoleViewModel
    {
        [Required]
        [Display(Name = "Role")]
        public string RoleName { get; set; }
    }
}