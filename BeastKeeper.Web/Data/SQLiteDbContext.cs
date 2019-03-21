using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using BeastKeeper.Core.Models;
using System.IO;
using BeastKeeper.Web.Helpers;

namespace BeastKeeper.Web.Data
{
    public class SQLiteDbContext : DbContext
    {
        public DbSet<Beast> Beasts { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Reminder> Reminders { get; set; }
        public DbSet<HistoryItem> HistoryItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder Options)
        {
            //var test = Assembly.GetEntryAssembly();
            //string DbLocation = test.Location;
            //var DbLocation = ReflectionAsseblyHelper.GetAsseblyLocation();
            //HACK: assembly location is always returning null, come back here if you find time and fix this
            var DbLocation = @"D:\Workspace\BeastKeeper\BeastKeeper.Web\Data\";
            Options.UseSqlite($"Data Source={DbLocation}Database.sqlite");
        }
    }
}
