using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeastKeeper.Core.Models
{
    public class HistoryItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Description { get; set; }
        public string MedicalCode { get; set; }
        public string ProcedureDate { get; set; }
        public int BeastId { get; set; }

        //[ForeignKey("BeastId")]
        //public virtual Beast Beast { get; set; }
    }
}
