using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BeastKeeper.Core.Models
{
    public class Beast
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Species { get; set; }
        public string Gender { get; set; }

        public virtual List<Photo> Photos { get; set; }
        public virtual List<Reminder> Reminders { get; set; }
        public virtual List<HistoryItem> HistoryItems { get; set; }
    }
}
