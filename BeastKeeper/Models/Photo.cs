using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BeastKeeper.Core.Models
{
    public class Photo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string ImgName { get; set; }
        public string ImgSource { get; set; }
        public string Description { get; set; }
        public int BeastId { get; set; }

        //[ForeignKey("BeastId")]
        //public virtual Beast Beast { get; set; }
    }
}
