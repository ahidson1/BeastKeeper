using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeastKeeper.Core.Models
{
    public class Reminder
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string CreateDate { get; set; }
        public string DueDate { get; set; }
        public int BeastId { get; set; }

        //[ForeignKey("BeastId")]
        //public virtual Beast Beast { get; set; }
    }
}
